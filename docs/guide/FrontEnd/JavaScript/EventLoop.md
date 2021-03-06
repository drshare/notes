# 事件循环 EventLoop

在了解Js事件循环机制之前我们要了解一下几个特性：

* Js 是单线程执行环境。
* Js 代码运行时异步的。

### 线程

1.什么是线程？

 线程是程序执行的最小单位，进程执行的基本单位。

简单的说进程就是一个应用程序，而线程就是程序运行中任务的真是执行者。

通常一个进程有多个线程，多个线程共享进程当中的资源，并且每个线程是相互独立`并行`执行的，每个线程有各自的寄存器（）环境，各自的调用栈（call task）以及各自的本地存储。

2.单线程有什么好处？

单线程就意味着，同一时间只能执行一个任务。

所有的任务都要排队，前面的任务完成后才能执行后面的任务。

如果前面的任务时间很长，就会导致队列阻塞，cpu空闲。比如I/O操作耗时但是cpu闲置，造成了性能浪费。

好处：--简单

单线程的好处就是，简单，如果是多线程的话，同一时间一个县城要插入div ，另一个线程执行删除div操作，这个时间就会出现很多问题，我们话需要为此只能加锁机机制等等。Js最初设计出来是为了做表单验证以及DOM操作的，很闲然不需要这么复杂的操作。

缺点：--性能浪费

为了解决单线程队列阻塞、浪费资源的问题，我们使用额异步的方法执行任务。

JS多线程：

在HTML5中，引入了Web Worker这个概念。它能够在另外一个线程中执行计算密集的js代码而不引起页面卡死，这是真正的多线程。为了保证线程的安全，Worker 中的代码不能访问DOM。

3.什么是异步？

异步的概念是相对于同步的概念来说的。

同步：同步就是任务按照顺序依次执行。只有上一个任务执行完成以后才能执行下一个任务。

异步：异步会把异步任务骨气，继续执行后面的同步任务。等到所有的同步任务都执行完成以后才会执行异步任务。

异步任务的实现依赖于Js引擎的时间循环机制。

**事件循环**：

1. javascript 内存机制

   * 调用栈 （call stack）：用于主线程任务执行。
   * 堆 （Heap）：存放结构化数据， 变量、对象等等。
   * 任务队列（Queque）： 存放异步任务与定时任务（实际存放的是异步任务的回调函数）。

2. 代码执行机制

   * 所有任务都在主线程上面执行。
   * 主线程之外还存在一个 **任务队列**。只要异步任务执行有了结果就在任务队列当中放置一个事件。
   * 一旦栈中的所有同步任务执行完毕，就对读取任务队列，选择首先执行的任务（由浏览器决定），知道任务队列没有可执行的任务。

3. Event Loop

   事件循环，就是主线程不断读取任务队列，将可以可执行的任务，按照顺序（顺序由浏览器决定）放入执行栈当中执行。

4. 常见的异步任务

   * DOM 操作
   * 网络操作（ajax）请求
   * 定时器

   时间循环机制图解：

   





4.为什么要异步？



### 任务

* MacroTask（宏任务）
* MicroTask（微任务）

# 

