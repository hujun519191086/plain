1 下载ubuntu镜像 http://mirrors.shu.edu.cn/ubuntu-releases/16.04.4/ubuntu-16.04.4-desktop-amd64.iso  

2 虚拟机加载镜像  

3添加vmware Tools  

第一种   
虚拟机---选择DVD---选择光盘 ----选择系统盘----重启  


第二种   
1.  挂载镜像文件，虚拟机->设置->硬件->CD/DVD.右边“连接”下面选择“使用IOS镜像文件”，浏览选择虚拟机包目录下面linux.iso  
2. 挂载成功后，在虚拟机右下角cd/dvd,图标上单击选择“连接“。在我的Ubuntu桌面就能看到光盘文件了  
3. 点击虚拟机 安装VMwareTools  
4. 拷贝VMwareTools............tar.gz到桌面  
5. cd /Desktop  
6. tar -zxvf VMwareTools............tar.gz  
7. cd vmware-tools..  
8. sudo  ./vmware-install.pl  
9. 重启  



第三种   
1.  挂载镜像文件，虚拟机->设置->硬件->CD/DVD.右边“连接”下面选择“使用IOS镜像文件”，浏览选择虚拟机包目录下面linux.iso  
2. 挂载成功后，在虚拟机右下角cd/dvd,图标上单击选择“连接“。在我的Ubuntu桌面就能看到光盘文件了  
  
3. 打开光盘文件，文件夹中有名字为VMwareTools............tar.gz的压缩包，点击上面的解压缩按钮"extract",浏览选择需要解压到的目录，这里选择的的是home/documents目录,开始解压。  
4. 打开终端界面，输入cd Documents/vmware-tools-distrib 回车，再输入sudo  ./vmware-install.pl 回车，以后可能需要输入 yes,一直回车，重启虚拟机。  
5. 看到虚拟机->重新安装vmware tools 菜单。安装成功。  
ps:  
Linux在安装VMware Tools时输入 ./vmware-install.pl出现please re-run this program as the super user  execution aborted 错误信息，解决方法是以：sudo  ./vmware-install.pl执行安装即可。  



# 复制 shift + ctrl + c  