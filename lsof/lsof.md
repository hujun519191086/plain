# lsof   
我们先来看一下度娘的解释  
>lsof（list open files）是一个列出当前系统打开文件的工具。在linux环境下，任何事物都以文件的形式存在，通过文件不仅仅可以访问常规数据，还可以访问网络连接和硬件。

### lsof 输出信息的意义
>command：进程的名称  
pid: 进程的标识符  
user: 进程的所有者  
fd: 文件描述符  
type: 文件类型  
device:指定磁盘的名称   
size：文件的大小    
node：索引节点（文件在磁盘上的标识）  
name: 打开文件的确切名称  

### 常用参数
>lsof filename 显示打开指定文件的所有进程  
lsof -a 标识参数必须同时满足时才能显示(lsof -a -u apple -c bash)  
lsof -c string 显示command列表中包含的进程所有打开文件  
lsof -u username 显示所有所属user进程的打开文件  
lsof -g gid 显示归属gid的进程情况  
lsof +d /DIR/显示目录下被进程打开的文件  
lsof +D /DIR/同上，但是会搜索目录下的所有目录，时间较长  
lsof -d FD显示指定文件描述符的进程  
lsof -n 不将ip转换成hostname缺省是不加-n参数  
lsof -i 用以显示符合条件的进程条件

sof -i[46] [protocol][@hostname|hostaddr][:service|port]
>lsof -i 4  ---->显示IPv4的打开的文件     
lsof -i 6   ---->显示IPv6的打开的文件   
lsof -i TCP ---->显示tcp的打开的文件   
lsof -i udp ---->显示udp的打开的文件   
lsof -i @localhost ---->显示localhost的打开的文件  
lsof -i hostaddr ---->显示hostaddr的打开的文件   
lsof -i :22 --------->显示22端口的使用情况

找到监听端口
>lsof -i -sTCP:LISTEN  

找出已建立的连接
>lsof -i -sTCP:ESTABLISHED


### 目前我自己用到的是关闭redis打开的进程
```
lsof -i tcp:6379
kill -9 pid
```