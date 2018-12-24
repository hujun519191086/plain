# ssh免密登录

### 1、客户端生成sshkey（客户端）
```
ssh-keygen -t rsa -C "470539167@qq.com"
```
上面的命令会在用户目录下生成.ssh文件夹
```
cd ~/.ssh
ls
```
显示两个秘钥
```
id_rsa （私钥）
id_rsa.pub (公钥)
```
### 2、将公钥上传到服务器（客户端）
我这里的服务器ip为172.16.180.141
```
ssh-copy-id -i ~/.ssh/id_rsa.pub root@172.16.180.141
```
如果显示下面说明成功
```
Now try logging into the machine, with:   "ssh 'root@172.16.180.141'"
and check to make sure that only the key(s) you wanted were added.
```

### 3、测试免密登录
```
ssh root@172.16.180.141
```
其实第二步就是相当于执行了
```
服务器上创建.ssh文件夹
在.ssh文件夹下创建authorized_keys文件
将客户端公钥的内容填进去
```
到这里免密登录就结束了  

----------------------------------

下面是其他一些配置

### 配置登录（客户端）
```
~/.ssh下创建config文件

cd ~/.ssh
vim config

将下面内容填入config中

Host            test
User            root
HostName        172.16.180.141

```
保存退出执行 ssh test链接到服务器

