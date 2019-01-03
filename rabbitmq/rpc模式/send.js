var amqp = require('amqplib');

(async function () {
    try {

        //连接服务器
        let conn = await amqp.connect('amqp://localhost');

        //创建管道
        let ch = await conn.createChannel();

        let q = await ch.assertQueue('', { exclusive: true });

        var corr = generateUuid()


        ch.consume(q.queue, function (msg) {
            if (msg.properties.correlationId === corr) {
                console.log('[x]接收到返回消息:' + msg.content.toString())

                setTimeout(function () {
                    conn.close();
                    process.exit(0);
                }, 500)
            }
        }, { noAck: true })

        ch.sendToQueue('hello', new Buffer('hello world'), {
            correlationId: corr, replyTo: q.queue
        })
        console.log('发送消息 hello world');










    } catch (error) {
        console.log(error)
    }
})()

function generateUuid() {
    return Math.random().toString() +
        Math.random().toString() +
        Math.random().toString();
}