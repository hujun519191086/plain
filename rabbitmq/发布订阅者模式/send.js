var amqp = require('amqplib');

(async function () {
    try {
        //连接服务器
        let conn = await amqp.connect('amqp://localhost')

        // 创建一个通道
        let ch = await conn.createChannel();

        //新建hello交换中心
        //交换类型direct, topic, headers, fanout. 
        ch.assertExchange('hello', 'fanout', { durable: false });

        //空字符串作为第二个参数意味着我们不希望将消息发送到任何特定队列。我们只想将它发布到我们的hello交换中心。
        ch.publish('hello', '', new Buffer('hello world'))

        console.log('[x]发送消息：hello world')

        //关闭连接
        setTimeout(function () {
            conn.close();
            process.exit(0);
        }, 500)

    } catch (error) {
        console.log(error.message)
    }
})()