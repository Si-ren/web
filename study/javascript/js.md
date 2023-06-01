# 官网

https://developer.mozilla.org/en-US/docs/Web/API

https://www.w3schools.com/js/js_api_intro.asp

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

window.set