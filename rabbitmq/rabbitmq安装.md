# rabbitmq安装

### docker镜像  
```
docker run  -d -p 5672:5672  -p 15672:15672  rabbitmq:management
```
安装完成后
浏览器打开 http://127.0.0.1:15672  
账号密码默认 guest

### mac
```
$ brew update
$ brew install rabbitmq
```
安装完后，需要将/usr/local/sbin添加到$PATH，添加到./.bash_profile文件，然后
```
$ source ./.bash_profile
$ echo $PATH      // 检查环境变量是否已经成功加入
```
安装完成后就可以启动RabbitMQ server了。

至此，安装就完成了。运行rabbitmq-server命令时可能会报错误：ERROR: epmd error for host localhost: timeout (timed out)，如果遇到这种情况，可以打开/etc/hosts文件，在文件末尾加上 127.0.0.1 localhost即可解决问题。
