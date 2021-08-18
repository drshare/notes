# 什么事节流和防抖？

### 节流和防抖是干什么的？

主要是为了控制函数被调用的评率。

防函数是在出发事件的单位时间后执行一次函数，单位时间内多次出发不执行函数，重新计时



节流函数是在单位时间内只执行一次函数多次触发只有一次有效

防抖。适用于用户不断输入 以及 windw resize 事件不断触发

节流  适用于鼠标不断点击 滚动事件的往下滚动，比如滚动到底部加载数据



```js
// 防抖函数
function debounce(fn, delay) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.applay(this, arguments);
    }, delay)
  }
}


// 节流函数
function throttle(fn, delay) {
  let timeout;
  return function() {
    if (!timeout) {
      timeout = setTimeout(() => {
        fn.apply(this, arguments),
      }, delay)
    }
  }
}
```

