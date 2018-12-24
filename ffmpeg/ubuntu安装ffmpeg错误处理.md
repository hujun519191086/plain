ERROR yasm not found

 
```
cd ..

wget http://www.tortall.net/projects/yasm/releases/yasm-1.1.0.tar.gz

tar -xf yasm-1.1.0.tar.gz

cd yasm-1.1.0

./configure

make && make install clean

 

cd ..

cd ffmpeg-checkout-2010-09-23

./configure --enable-libmp3lame --enable-libvorbis --enable-libxvid --enable-gpl --enable-shared --enable-version3 --enable-nonfree --enable-pthreads --enable-libfaac --enable-libopencore-amrnb --enable-libopencore-amrwb --enable-libtheora --enable-libx264 --enable-libxvid --enable-x11grab

 ```

ERROR: libfaac not found

 ```

cd ..

wget http://downloads.sourceforge.net/faac/faac-1.28.tar.gz

tar -xf faac-1.28.tar.gz

cd faac-1.28

./configure

make && make install cleancd 

 

cd ..

cd ffmpeg-checkout-2010-09-23

./configure --enable-libmp3lame --enable-libvorbis --enable-libxvid --enable-gpl --enable-shared --enable-version3 --enable-nonfree --enable-pthreads --enable-libfaac --enable-libopencore-amrnb --enable-libopencore-amrwb --enable-libtheora --enable-libx264 --enable-libxvid --enable-x11grab

 ```

ERROR: libmp3lame >= 3.98.3 not found

 ```

cd ..

wget http://downloads.sourceforge.net/project/lame/lame/3.98.4/lame-3.98.4.tar.gz?r=http://sourceforge.net/projects/lame/files/lame/&ts=1285256527&use_mirror=ufpr

tar -xf lame-3.98.4.tar

cd lame-3.98.4

./configure

make && make install clean

 

cd ..

cd ffmpeg-checkout-2010-09-23

./configure --enable-libmp3lame --enable-libvorbis --enable-libxvid --enable-gpl --enable-shared --enable-version3 --enable-nonfree --enable-pthreads --enable-libfaac --enable-libopencore-amrnb --enable-libopencore-amrwb --enable-libtheora --enable-libx264 --enable-libxvid --enable-x11grab

``` 

ERROR: libopencore_amrnb not found

 
```
cd ..

wget http://downloads.sourceforge.net/project/opencore-amr/opencore-amr/0.1.2/opencore-amr-0.1.2.tar.gz?r=http://sourceforge.net/projects/opencore-amr/&ts=1285256783&use_mirror=ufpr

tar -xf opencore-amr-0.1.2.tar.gz

cd opencore-amr-0.1.2

./configure

make && make install clean

 

cd ..

cd ffmpeg-checkout-2010-09-23

./configure --enable-libmp3lame --enable-libvorbis --enable-libxvid --enable-gpl --enable-shared --enable-version3 --enable-nonfree --enable-pthreads --enable-libfaac --enable-libopencore-amrnb --enable-libopencore-amrwb --enable-libtheora --enable-libx264 --enable-libxvid --enable-x11grab

 ```

ERROR: libtheora not found

 ```

cd ..

wget http://downloads.xiph.org/releases/theora/libtheora-1.1.1.tar.bz2

tar -xf libtheora-1.1.1.tar.bz2

cd libtheora-1.1.1

./configure

make && make install clean

 

cd ..

cd ffmpeg-checkout-2010-09-23

./configure --enable-libmp3lame --enable-libvorbis --enable-libxvid --enable-gpl --enable-shared --enable-version3 --enable-nonfree --enable-pthreads --enable-libfaac --enable-libopencore-amrnb --enable-libopencore-amrwb --enable-libtheora --enable-libx264 --enable-libxvid --enable-x11grab

 ```

ERROR: libx264 not found

 ```

cd ..

wget ftp://ftp.videolan.org/pub/videolan/x264/snapshots/x264-snapshot-20100922-2245.tar.bz2

tar -xf x264-snapshot-20100922-2245.tar.bz2

cd x264-snapshot-20100922-2245

./configure

make && make install clean

 

cd ..

cd ffmpeg-checkout-2010-09-23

./configure --enable-libmp3lame --enable-libvorbis --enable-libxvid --enable-gpl --enable-shared --enable-version3 --enable-nonfree --enable-pthreads --enable-libfaac --enable-libopencore-amrnb --enable-libopencore-amrwb --enable-libtheora --enable-libx264 --enable-libxvid --enable-x11grab

 
```
ERROR: libxvid not found

 
```
cd ..

wget http://downloads.xvid.org/downloads/xvidcore-1.2.2.tar.gz

tar -xf xvidcore-1.2.2.tar.gz

cd xvidcore/build/generic

./configure

make && make install clean

 

cd ..

cd ffmpeg-checkout-2010-09-23

./configure --enable-libmp3lame --enable-libvorbis --enable-libxvid --enable-gpl --enable-shared --enable-version3 --enable-nonfree --enable-pthreads --enable-libfaac --enable-libopencore-amrnb --enable-libopencore-amrwb --enable-libtheora --enable-libx264 --enable-libxvid --enable-x11grab

 ```

Depending on your system, you may need to update your GNU make as well if you get this error:

common.mak:28: *** unterminated call to function `foreach': missing `)'.  Stop.

 ```

cd ..

wget http://ftp.gnu.org/gnu/make/make-3.82.tar.gz

tar -xf make-3.82.tar.gz

cd make-3.82.tar

./configure

make && make install clean

bash -l

cd ..

cd ffmpeg-checkout-2010-09-23

make && make install clean

ldconfig

bash -l

```
ffmpeg: error while loading shared libraries: libavdevice.so.52: cannot open shared object file: No such file or directory
```
解决办法：

此情况是因为ffmpeg未找到相关依赖包，可以通过以下方法解决 
先　find / -name libavdevice.so.56 得到该文件的目录地址， (/usr/local/lib/)
然后 vim /etc/ld.so.conf 将上述目录添加到最后一行并保存退出； 
再 sudo ldconfig 使配置生效，即可；

如果执行 ldconfig: command not found

export PATH=”$PATH:/sbin”

```