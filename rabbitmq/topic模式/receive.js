
// node receive.js *.red
// node receive.js *.green

var amqp = require('amqplib');

(async function () {
    try {

        //连接服务器
        let conn = await amqp.connect('amqp://localhost');

        //创建管道
        let ch = await conn.createChannel();

        //创建hello交换中心类型为topic
        ch.assertExchange('hello', 'topic', { durable: false });

        //创建临时队列
        let q = await ch.assertQueue('', { exclusive: true })

        //绑定队列到hello交换中心的 *.red路由中
        ch.bindQueue(q.queue, 'hello', process.argv[2]);

        //消费消息
        ch.consume(q.queue, function (msg) {

            console.log('[x]接收到消息' + msg.content.toString() + ',监听的队列：' + process.argv[2])

        }, { noAck: true })



    } catch (error) {
        console.log(error.message)
    }
})()