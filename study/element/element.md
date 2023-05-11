块元素：
独占一行，从上到下顺序排列
常用：div hr p h1~6 ul ol dl form table

行元素：
从左到右，碰到父元素自动换行
常用：span a i em...

CSS属性书写顺序：
1.布局定位属性: display,position,float,clear,visibility,overflow
2.自身属性:width,height, margin,padding,border, background
3.文本属性:color,font,text-decoration,text-align,vertical-align,white-space,break-word
4.其他属性: content,cursor,border-radius,box-shadow,text-shadow,background:liner-gradient...

定位：
静态定位（决定定位）特点：
不占有位置。
没有祖先元素或者祖先元素没有定位，则以浏览器为准定位。
如果祖先元素有定位，则以最近一级的有定位元素为参考点移动位置。
相对定位：
占有位置
相对于自身位置移动
固定定位：
以浏览器的可视窗口为参照点
跟父元素没有关系
随滚动条滚动
不占有原先位置
粘性定位：
以浏览器的可视窗口为参照点移动元素
粘性定位占有原先位置
必须添加top、left、right、bottom其中一个才有效
ie不支持
定位层级：
z-indix: 1;
数字越大，盒子越靠上
属性相同，则按书写顺序，后来居上
定位特点：
绝对定位会完全压住盒子
行内元素添加绝对或者固定定位，可以直接设置高度和宽度
块级元素添加绝对或者固定定位，不给宽度和高度的情况下，默认大小是内容的大小
显示与隐藏：
1.overflow:
visible: 显示
hidden:隐藏
scroll：溢出部分显示滚动条，不溢出也显示滚动条
auto：溢出的时候才显示滚动条，不溢出不显示
2.display
none：不显示，同时不占用位置
3.visibility
visible: 显示
hidden:隐藏
visibility隐藏元素后继续占有原来位置

视口：
标准viewport设置
视口宽度和设备保持一致
视口的默认缩放比例1.0
不允许用户自行缩放
最大允许的缩放比例1.0
最小允许的缩放比例1.0

# 移动

## 移动端中多倍图

因为在某些手机上，一个px代表俩物理像素点，所以得成倍缩小
``
/*在iPhone8下*/
img {
/*原始图片100*100px*/
width: 50px;
height: 50px
}
.box {
/*原始图片100*100px*/
background-size: 50px 50px;
}
``

## 移动端技术解决方案：

### CSS初始化 normalize.css

保护了有价值的默认值
修复了浏览器的bug
模块化
有详细文档

### 特殊样式

box-sizing: border-box; #区别于默认的content-box
1.传统模式宽度计算：盒子宽度=CSS中设置的width+border+padding
2.CSS盒子模型： 盒子宽度=CSS中设置的宽度width里包含了border和padding
移动端可以全部CSS盒子模型
PC端如果完全需要兼容，就用传统模式，不考虑兼容性，就选择CSS很盒子模型
-webkit-box-sizing: border-box;
-webkit-tap-highlight-color: transparent; #点击高亮我们需要清除，设置为transparent完成透明
-webkit-appearance: none; #在移动段浏览器默认的外观在ios上加上这个属性才能给按钮和输入框自定义样式
img,a {-webkit-touch-callout:none;} #禁用长按页面时弹出菜单
