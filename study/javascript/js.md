# 官网

<https://developer.mozilla.org/en-US/docs/Web/API>

<https://www.w3schools.com/js/js_api_intro.asp>

鼠标事件
触发条件
onclick
鼠标点击左键触发
onmouseover
鼠标经过触发
onmouseout
鼠标离开触发
onfocus
获得鼠标焦点触发
onblur
失去鼠标焦点触发
onmousemove
鼠标移动触发
onmouseup
鼠标弹起触发
onmousedown
鼠标按下触发

# innerText和innerHTML区别

innerText不识别html标签 非标准 去除换行和空格
innerHTML识别html标签 W3C标准

# 创建元素的区别

## document.createElement()

直接写入某个dom节点，不会导致页面全部重绘

## document.write()

如果 页面文档流加载完毕，在调用这句话会导致页面重绘。
也就是如果这句话在某事件中，例如点击

```html
document.write('
<div>123</div>');
```

那么会导致界面就显示123

## element.innerHTML

创建多个元素效率更高，但是结构复杂。不要拼接字符串，***采取数组形式拼接***

```js
var array = []
for (let i = 0; i < 100; i++) {
    array.push('<div style="width:100px;height:20px;border: 1px solid blue;"></div>')
}
document.body.innerHTML = array.join('');
```

# 定时器

## 倒计时

 // window.setTimeout()可以在调用的时候可以省略window
    // 单位是毫秒, 可以省略,省略默认是0
    var timer = window.setTimeout(fn, 500)
    // 停止倒计时
    window.clearTimeout(timer)

## 定时任务

    // 每隔一段时间,就调用一次回调函数
    window.setInterval(fn, 3000)
    window.setInterval(function () {
        console.log("setInterval")
    }, 1000)

# 页面加载顺序

## window.addeventListener('load', function (){} )和 windows.onload

// BOM的load事件,当文档全部加载完后,执行,包含dom元素 图片 flash css等
// 无论写多少个load的window.addeventListener,都可以加载
window.addeventListener('load', function (event) {
    var button = document.querySelector('button');
    button.addEventListener('click', function (event) {
        console.log(event.target)
    }
})
// 如果有多个windows.onload，那么只会加载最后一个
windows.onload = function () {
    console.log('window.addEventListener');
}

## document.addEventListener('DOMContentLoaded',function (event) {})

//document.addEventListener('DOMContentLoaded',function (event) {})
// 当DOM加载完毕,不包含图片 flas css等就可以执行
document.addEventListener('DOMContentLoaded',function (event) {
    alert(111);
})

# 调整窗口事件

// 调整窗口大小事件
window.onresize = function () { }

window.addEventListener("resize", function () { })
// window.innerWidth当前屏幕宽度

# mouseenter和mouseover的区别

当鼠标移动到元素上时就会触发mouseenter事件
mouseover经过自身盒子会触发，经过子盒子还能触发。mouseenter只会经过自身盒子触发。

# window.localStorage和window.sessionStorage区别

window.localStorage：生命周期永久生效，除非手动删除，否则关闭页面也会存在
可以多窗口共享（同一浏览器可以共享）
以键值对的形式存储使用

window.sessionStorage：生命周期为关闭浏览器窗口，在同一个页面下数据共享
以键值对的形式存储使用
