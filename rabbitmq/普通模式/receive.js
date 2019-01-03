var amqp = require('amqplib');

(async function () {
    try {

        //连接服务器
        let conn = await amqp.connect('amqp://localhost');

        //创建一个通道
        let ch = await conn.createChannel();

        //声明不会丢失的hello队列
        ch.assertQueue('hello', { durable: true })

        //公平派遣任务
        ch.prefetch(1)

        //消费hello消息队列中的消息
        ch.consume('hello', function (msg) {

            let secs = msg.content.toString().split('.').length - 1;

            console.log('[x]接收到消息：' + msg.content.toString())

            //假定程序处理程序时间为消息后面的点决定 一个点为10s
            setTimeout(function () {
                console.log('[x]处理消息结束：' + msg.content.toString())
                //消息确认，确认后rabbitmq就删除此消息了
                ch.ack(msg)
            }, secs * 10000)

        }, { noAck: false })



    } catch (error) {
        console.log(error.message, 'error')
    }
})()