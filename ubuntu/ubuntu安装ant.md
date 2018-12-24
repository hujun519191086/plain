第一种 sudo apt-get install ant

第二种
找到链接http://ant.apache.org/bindownload.cgi apache-ant-1.9.11-bin.tar.gz

下载 ant包
wget http://mirrors.hust.edu.cn/apache//ant/binaries/apache-ant-1.9.11-bin.tar.gz

解压下载下来的.tar.gz文件： tar -xf apache-ant-1.9.11-bin.tar.gz (可能会要求输入密码)

3.将解压出来的文件移动到/opt/下：sudo mv apache-ant-1.9.11 /opt/ （sudo 不能省，否则没有权限）

4.配置环境变量：sudo gedit /etc/profile，在原来基础上添加以下红色字：

export ANT_HOME=/opt/apache-ant-1.8.2

export JAVA_HOME=/usr/lib/jvm/java-6-openjdk

export PATH=$JAVA_HOME/bin:$PATH:$ANT_HOME/bin

export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

5.验证是否安装成功： ant -version

Apache Ant(TM) version 1.8.2 compiled on December 20 2010

如此字样，则表示安装成功！

具体的之用方法，使用 ant --help 即可一一学到。

