参考[rabbitmq教程](http://www.rabbitmq.com/getstarted.html)  

rabbitmq是一个消息中间件，教程中把他比作为邮局，这个比喻很恰当。

在rabbitmq中需要了解  
```
生产者：生产者也就是发送者，产生消息的一方，将消息放入队列中
消费者：消费者也就是接受者，rabbitmq把该队列中的消息派发给消费者
队列：
通道：
```

我们项目中的应用场景  
我们把微信相关的放到了微信的微服务上，微信发送消息，通过rabbitmq发送，用的是topic模式区分不同的环境。