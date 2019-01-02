# javascript高级程序设计总结  
## 1-50页  

### script标签的defer与async属性
defer延迟脚本，立即下载，文档解析完后再执行。
async异步脚本，立即下载，下载完成后立即执行。
它们的下载都不会阻塞其他内容的执行与下载

#### script中下script时需要转义
```
<script>
    str = "this is a <\/script>"
    console.log(str)
</script>
```

#### script标签要放在body的最后面
```
代码是自上而下顺数执行的，(除defer和async)
页面开始是空白的直到遇到body标签时才显示页面内容

为了防止用户看到的是没有样式的页面，link标签都是放到header中，
为了缩短页面空白时间scritp标签放到body最下面
```
页面显示helloworld
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
    <h1>hello world</h1>
    <script>
        debugger
    </script>
</body>
</html>
```
页面一直空白
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script>
        debugger //模仿js一直在下载或执行
    </script>
</head>
<body>
    <h1>hello world</h1>
</body>
</html>
```

### 文档类型
文档类型：doctype

文档模式分为：混杂模式和标准模式

混杂模式：会让IE的行为与包含非标准特性的IE5相同  
标准模式：让IE的行为更接近标准行为  

准标准模式：大多都符合标准，但在处理图片间隙的时候不同，尤其是表格中间隙


开启混杂模式：文档开始出没有发现文档类型声明


标准模式声明有以下几种
```
<!-- html 4.01严格型 -->
<!DOCTYPE HTML PUBLIC 
"-//W3C//DTD HTML 4.01//EN" 
"http://www.w3.org/TR/html4/strict.dtd">

<!-- xhtml 1.0严格型 -->
<!DOCTYPE html PUBLIC 
"-//W3C//DTD XHTML 1.0 Strict//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">


<!- html5 -->
<!DOCTYPE html>
```

准标准模式：  
通过过渡性或框架机型触发
```
<!-- html 4.01过渡型 -->
<!DOCTYPE HTML PUBLIC 
"-//W3C//DTD HTML 4.01 Transitional//EN" 
"http://www.w3.org/TR/html4/loose.dtd">

<!-- html 4.01框架集型 -->
<!DOCTYPE HTML PUBLIC 
"-//W3C//DTD HTML 4.01 Frameset//EN" 
"http://www.w3.org/TR/html4/frameset.dtd">

<!-- xhtml 1.0过渡型 -->
<!DOCTYPE html PUBLIC 
"-//W3C//DTD XHTML 1.0 Transitional//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<!-- xhtml 1.0框架集型 -->
<!DOCTYPE html PUBLIC 
"-//W3C//DTD XHTML 1.0 Frameset//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```

### 检测数据类型typeof 

```
undefined
boolean
string
number
object
function
```
```
//undefined
var u1;
var u2=undefined
typeof uu; //检测为声明的变量也是undefined但是使用时会报错

//boolean
var b1=true;

//string
var s1='abc';
var s2='123';

//number
var n1=123;
var n2=NaN;
var n3=Infinity;

//object
function TestA(){}

var o1={};
var o2=null;
var o3 = new Object()
var o4 = new TestA()

//function
var f1 = function(){}
function f2(){}
```


