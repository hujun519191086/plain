//node receive.js a1
//node receive.js a2
//node receive.js a3
var amqp = require('amqplib');

(async function () {
    try {
        //连接服务器
        let conn = await amqp.connect('amqp://localhost');

        //创建通道
        let ch = await conn.createChannel();

        //创建hello交换中心
        ch.assertExchange('hello', 'direct', { durable: false });

        //声明临时队列
        let q = await ch.assertQueue('', { exclusive: true })

        //将临时队列绑定到hello交换中心的 a1路由上
        ch.bindQueue(q.queue, 'hello', process.argv[2])

        //消费消息
        ch.consume(q.queue, function (msg) {
            console.log('[x]获得消息路由：' + msg.fields.routingKey + '消息：' + msg.content.toString())
        }, { noAck: true })


    } catch (error) {
        console.log(error.message)
    }
})()