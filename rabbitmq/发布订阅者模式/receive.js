var amqp = require("amqplib");

(async function () {
    try {

        //连接服务器
        let conn = await amqp.connect('amqp://localhost');

        //创建一个通道
        let ch = await conn.createChannel()

        //声明hello交换机
        //交换类型direct, topic, headers, fanout. 
        ch.assertExchange('hello', 'fanout', { durable: false });

        //创建一个临时的队列
        //当我们将队列名称作为空字符串提供时，我们使用生成的名称创建一个非持久队列：
        //当声明它的连接关闭时，队列将被删除，因为它被声明为独占
        let q = await ch.assertQueue('', { exclusive: true });

        console.log('[x]等待消息', q.queue);

        //将队列绑定到交换机上，此时交换机上的消息都会发送到此队列中
        ch.bindQueue(q.queue, 'hello', '');

        //消费临时队列中的消息
        ch.consume(q.queue, function (msg) {
            console.log('[x]接收到消息' + msg.content.toString())
        }, { noAck: true })


    } catch (error) {
        console.log(error.message)
    }

})()