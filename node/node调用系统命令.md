# node调用系统命令
>shelljs 包重新包装了 child_process，调用系统命令更加方便，建议直接使用shelljs   
>npm install shelljs --save

#### nodejs中调用系统命令使用的是child_process(子进程)模块   

默认情况下nodejs的父进程与衍生的子进程之间会建立stdin, stdout, stderr管道

>child.stdin: 获取标准输入  
>child.stdout:获取标准输出  
>child.stderr:获取标准错误输出  

nodejs中异步和同步进程的基础
```
child_process.spawn()用于异步的衍生子进程且不会阻塞 Node.js 事件循环。
child_process.spawnSync() 同步地衍生子进程，但会阻塞事件循环直到衍生的子进程退出或被终止。
```

child_process 模块还提供了其他一些同步和异步的方法。 每个方法都是基于 child_process.spawn() 或 child_process.spawnSync() 实现的。  
```
child_process.exec(): 衍生一个 shell 并在 shell 上运行命令，当完成时传入 stdout 和 stderr 到回调函数。  
child_process.execFile(): 类似 child_process.exec()，但直接衍生命令且无需先衍生 shell。  
child_process.fork(): 衍生一个新的 Node.js 进程，并通过 IPC 通讯通道来调用指定的模块，该通道允许父进程与子进程之间相互发送信息。  
child_process.execSync(): child_process.exec() 的同步版本，会阻塞 Node.js 事件循环。  
child_process.execFileSync(): child_process.execFile() 的同步版本，会阻塞 Node.js 事件循环。  
```

语法：
```
异步进程
child_process.spawn(command[, args][, options])
child_process.exec(command[, options][, callback])
child_process.execFile(file[, args][, options][, callback])
child_process.fork(modulePath[, args][, options])


同步进程
child_process.spawnSync(command[, args][, options])
child_process.execFileSync(file[, args][, options])
child_process.execSync(command[, options])
```


我们先来看下怎么使用   

我们以lsof为例  如果你还不知道lsof请先点击[lsof命令](https://github.com/13653389794/plain/blob/master/lsof/lsof.md)
```
// mac

//输出有点慢需要多等会
const { spawn } = require("child_process");

const lsof = spawn("lsof")

//获取标准输出
lsof.stdout.on("data", function(data){
    console.log('-----stdout  start-------')
    console.log('' + data); //data默认为buffer需要转换为string
    console.log('-----stdout  end-------')
})
```
是不是有很多输出  
接下来我们看下带参数的
```
//mac

const { spawn } = require("child_process");

const lsof = spawn("lsof", ['-i', 'udp'])

lsof.stdout.on("data", function(data){
    console.log('-----stdout  start-------')
    console.log('' + data); //data默认为buffer需要转换为string
    console.log('-----stdout  end-------')
})
```
此时只显示udp的进程  
我们再来看一个完整一些的demo
```
// mac
const { spawn } = require("child_process");

const lsof = spawn("lsof", ['-i', 'udp'])
//const lsof = spawn("lsof", ['-i udp']) //参数错误会到标准错误输出

//获取进程id
console.log('pid是：'+ lsof.pid)

//获取标准输出
lsof.stdout.on("data", function(data){
    console.log('-----stdout  start-------')
    console.log('' + data); //data默认为buffer需要转换为string
    console.log('-----stdout  end-------')
})

//获取标准错误输出
lsof.stderr.on("data", function(data){
    console.log('-----stderr  start-------')
    console.log('' + data); //data默认为buffer需要转换为string
    console.log('-----stderr  end-------')
})
```
