# rem基础

rem(root em)是一个相对单位，类似于em，em是基于**父元素**字体大小.

不同的是rem的基准是相对于**html元素**的字体大小.

比如，根元素(html)设置font-size=12px，非根元素设置width: 2em;则换成px就表示24px.

# 媒体查询

Media Query是CSS3 新语法

使用 @media 查询，可以针对不同的媒体类型定义不同的样式。

当重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染界面

目前针对很多类型的设备都可以用上多媒体查询

```html
    <!-- 使用 @media 开头 -->
<!-- mediatype 媒体类型 -->
<!-- 关键字 -->
<!-- media feature 媒体特性 必须要小括号包含 -->
@media media and|not|only (media feature) {
CSS-Code;
}
```

## mediatype查询类型

| value | Description       |
|-------|-------------------|
| all   | 用于所有设备            |
| print | 用于打印机和打印预览        |
| scree | 用于电脑屏幕，平板电脑，只能手机等 |

## 关键字

将媒体类型或多个媒体特性连接到一起作为媒体查询条件
| value | Description |
| ----------- | ----------- |
| and | 相当于 且 |
| not | 相当于 非 |
| only | 指定某个特定的媒体类型，可以省略|

```html
example:

```

## 引入资源

当样式比较繁多的时候，可以针对不同的媒体使用不同stylesheets(样式表)。

原理，在link中判断设备尺寸，然后引用不同的css文件。

```html
example:
<link rel="stylesheet" media="mediatype and|not|only (media feature)" href="mystylesheet.css">
```

# less

**变量运算中，除法需要加括号，运算符中间必须有空格隔开**

```html
//定义一个粉色的变量
@color: pink
body {
background-color: @color;
}
```

## less嵌套

如果遇见 交集|伪类|伪元素选择器
内层选择器的前面没有&符号,则被解析为父选择器后代
如果有&符号,被解析为父元素自身或者父元素的伪类

```
a:hover {
    color:red;
}
```

```
a{
    &:hover{
        color:red
    }
}
```
