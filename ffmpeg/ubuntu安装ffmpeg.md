# ubuntu安装ffmpeg
### 环境
>mac VMware + ubuntu 16.04.4

### 方法一
```
第一步：添加源。
sudo add-apt-repository ppa:djcj/hybrid

第二步：更新源。
sudo apt-get update

第三步：下载安装。
sudo apt-get install ffmpeg
```

### 方法二
### 1.安装ffmpeg
首先安装h264 视频编解码库：
```
sudo apt-get update   


sudo apt-get -y --force-yes install autoconf automake build-essential libass-dev libfreetype6-dev \
  libsdl1.2-dev libtheora-dev libtool libva-dev libvdpau-dev libvorbis-dev libxcb1-dev libxcb-shm0-dev \
  libxcb-xfixes0-dev pkg-config texi2html zlib1g-dev   



sudo apt-get install libx264-dev
```

安装 libtheora
```
wget http://downloads.xiph.org/releases/theora/libtheora-1.1.1.tar.bz2

tar -xf libtheora-1.1.1.tar.bz2

cd libtheora-1.1.1

./configure

make && make install clean
```

安装ffmpeg ，依次输入以下命令：
```
wget http://ffmpeg.org/releases/ffmpeg-4.1.tar.bz2

sudo tar jxvf ffmpeg-4.1.tar.bz2

cd ffmpeg-4.1/

sudo ./configure --enable-shared --enable-pthreads --enable-gpl  --enable-avresample --enable-libx264 --enable-libtheora  --disable-yasm

sudo make   

sudo make install
```
执行sudo ffmpeg验证是否安装成功
我的出现了错误
```
ffmpeg: error while loading shared libraries: libavdevice.so.58: cannot open shared object file: No such file or directory
```
```
解决办法：

此情况是因为ffmpeg未找到相关依赖包，可以通过以下方法解决 
先　find / -name libavdevice.so.58 得到该文件的目录地址， (/usr/local/lib/)
然后 vim /etc/ld.so.conf 将上述目录添加到最后一行并保存退出； 
再 sudo ldconfig 使配置生效，即可；

如果执行 ldconfig: command not found

export PATH=”$PATH:/sbin”

```
然后再执行 ffmpeg显示成功
