
//node send.js helloworld a1
//node send.js helloworld a2
//node send.js helloworld a3

var amqp = require('amqplib');

(async function () {
    try {

        //连接服务器
        let conn = await amqp.connect('amqp://localhost');

        //创建通道
        let ch = await conn.createChannel();

        //创建hello交换中心类型为direct
        ch.assertExchange('hello', 'direct', { durable: false });

        //往hello消息中心的a1的路由发送消息
        ch.publish('hello', process.argv[3], new Buffer(process.argv[2]))

        console.log('[x]发送消息,队列:' + process.argv[3] + '消息:' + process.argv[2])

        //关闭连接
        setTimeout(function () {
            conn.close();
            process.exit(0);
        }, 500)

    } catch (error) {
        console.log(error.message)
    }
})()