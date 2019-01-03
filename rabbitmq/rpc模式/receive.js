var amqp = require('amqplib');

(async function () {
    try {

        //连接服务器
        let conn = await amqp.connect('amqp://localhost');

        //创建通道
        let ch = await conn.createChannel();

        //创建hello队列
        ch.assertQueue('hello', { durable: false });

        ch.prefetch(1);

        console.log('[x]等待接收rpc消息')

        ch.consume('hello', function (msg) {
            console.log('[x]接收到消息' + msg.content.toString())

            ch.sendToQueue(msg.properties.replyTo,
                new Buffer('处理后的消息'),
                {
                    correlationId: msg.properties.correlationId
                })

            ch.ack(msg);
        })




    } catch (error) {
        console.log(error.message)
    }
})()