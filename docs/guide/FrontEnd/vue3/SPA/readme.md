# SPA

## 1.什么事spa？

> Spa - Single Page Application 	`单页面应用`，顾名思义就是只有一个页面的应用。只有一个 html 文件，一般也称为CSR - Client Side Render `客户端渲染`。

特性：

应用所需要的资源（html，css，js），在第一次加载中全部加载。也就是说进入首页的时候就把所有页面需要的资源全部加载完毕。

页面跳转、或者是URL 变更之后，不需要重新加载资源，直接渲染即可。

## 2.相对应的另一个相反的概念：`多页面应用`MPA

> MPA - MultiPage Application `多页面应用`，顾名思义多页面应用就是多个页面的应用，有多个 html 文件，页面跳转之后重新向服务器请求资源（包括 html css js 等等）。
>
> 之前后端主导的时代MVC 模式，基本上都是多页面应用。

## 3.为什么要使用SPA？

> SPA 是近几年便随着前端框架发展以后火起来的

+ SPA避免了切换页面向服务器请求资源引起的卡顿。带来无缝切换的流畅体验。
+ 对于有固定布局的页面，SPA可以做到局部刷新页面，并且容易实现转场动画。

缺点：

+ 首页加载慢
+ 不利于SEO

## 4 实现原理

### 1.映射表 URL => 视图

首先需要一个映射关系，就是不同的URL 对应不同的视图。

对于Vue 来说 就是 URL 和组件之间的关系。

```js
// vue router.js
{
	path: '/',
	component: 组件
}
```

### 2.匹配器

接下来的任务就是做到 URL 变化的时候，也改变我们的视图/组件。

> 匹配器的主要职责就是监听URL变化，一旦URL变化，就渲染对应的视图。
>
> 由于 SPA 是局部刷新，还要在页面变化的时候尽量避免刷新页面。

#### 页面怎么跳转？

+ 浏览器 - 用户手动输入URL、用户操作浏览器前进后退。
+ 程序内 - 用户操作引起程序内部路由变化。

```js
window.location = "http://www.baidu.com"
window.location.href = "http://www.baidu.com"
winodw.location.assign("http://www.baidu.com")
window.location.replace("http://www.baidu.com")
window.location.reload()
window.history.back();
window.history.go(-1);
top.location.href=”url”         在顶层页面打开url（跳出框架）  
self.location.href=”url”        仅在本页面打开url地址  
parent.location.href=”url”      在父窗口打开Url地址  
this.location.href=”url”        用法和self的用法一致

```



#### 如何路由监听？

```js
// 程序内路由跳转不会引起 页面刷新的方法
// 1.hash - URL hash(#) 后面的部分，改变URL hash 不会引起页面刷新，常用作锚点。
通过 hashchange 事件监听 URL 的变化，改变 URL 的方式只有这几种：
1.通过浏览器前进后退改变 URL
2.通过<a>标签改变 URL
3.通过window.location改变URL hash 部分。

// history 实现
history 提供了 pushState 和 replaceState 两个方法，这两个方法改变 URL 的 path 部分不会引起页面刷新
history 下用 popstate 事件监听路由变化：

1.通过浏览器前进后退改变 URL 时会触发 popstate 事件
2.通过pushState/replaceState或<a>标签改变 URL 不会触发 popstate 事件。
3.好在我们可以拦截 pushState/replaceState的调用和<a>标签的点击事件来检测 URL 变化。
4.history的back，go，forward方法。
```







### 3.历史记录





