// node send.js 这是一条消息 bid.red
// node send.js 这是一条消息 bid.green

var amqp = require('amqplib');

(async function () {
    try {

        //连接服务器
        let conn = await amqp.connect('amqp://localhost');

        //创建通道
        let ch = await conn.createChannel();

        //声明hello交换中心类型为topic
        ch.assertExchange('hello', 'topic', { durable: false });

        //往hello消息中心的bid.red的路由发送消息
        ch.publish('hello', process.argv[3], new Buffer(process.argv[2]))

        console.log('[x]发送消息%s:%s', process.argv[3], process.argv[2])

        //关闭连接
        setTimeout(function () {
            conn.close();
            process.exit(0);
        }, 500)

    } catch (error) {
        console.log(error.message)
    }
})()