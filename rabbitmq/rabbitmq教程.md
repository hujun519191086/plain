参考[rabbitmq教程](http://www.rabbitmq.com/getstarted.html)  

rabbitmq是一个消息中间件，教程中把他比作为邮局，这个比喻很恰当。

在rabbitmq中需要了解  
```
生产者：生产者也就是发送者，产生消息的一方，将消息放入队列中
消费者：消费者也就是接受者，rabbitmq把该队列中的消息派发给消费者
队列：
通道：
```

下面我们看个简单的小例子  
发送单个消息的生产者，以及接收消息并将其打印出来的消费者  

首先我们需要先安装amqplib
```
npm install amqplib
```