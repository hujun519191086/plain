//node send.js 这是第一个消息..
var amqp = require('amqplib');

(async function () {
    try {

        let msg = process.argv[2];

        //连接到服务器
        let conn = await amqp.connect('amqp://localhost');

        //创建一个通道
        let ch = await conn.createChannel();

        //声明hello队列
        //设置为rabbitmq挂掉hello队列也不会丢失
        ch.assertQueue('hello', { durable: true });

        //往hello消息队列发送一个持续的消息
        ch.sendToQueue('hello', new Buffer(msg), { persistent: true })

        console.log('[x]发送消息成功：' + msg);

        //发送成功后关闭连接
        setTimeout(function () {
            conn.close();
            process.exit(0);
        }, 500)


    } catch (error) {
        console.log(error.message, 'error')
    }
})()