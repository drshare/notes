

## 1. nvm是什么??	

nvm  --  node.js version management , 简单的说就是node.js版本管理工具。通过它可以安装切换不同的node.js 不同的版本。

## 2.nvm 下载安装

1. 下载 

github搜索nvm windows, 目前最新版本是1.7.1 

![image-20200716092102253](D:\Windows\Desktop\杂项\记事本\HjyNode\img\image-20200716092102253.png)

新手 建议下载 nvm-setup.zip  解压之后是一个exe 文件 

高手 随便下载 , 不同的是 nvm-noisntall 是绿色版本但是需要自己配置 ,nvm-setup  直接安装就可以了。

安装过程  下一步 -> 选择安装路径 -> 选择已经存在的node.js的安装路径 -> 接下来就是下一步下一步即可。

打开 cmd  输入nvm 验证是否安装成功

## 3.nvm的基本使用 

#### 1.安装/管理node.js

//1.查看本地安装的所哟偶node.js版本

nvm list [available] (可选参数)

nvm ls 

// 2. 安装某一个版本的node.js

// arch 可选安装 x86 还是 x64  version 就是版本号

nvm install <version> [arch] 

// 3.使用特定的版本 

nvm use <version> [arch]

// 4.卸载

nvm uninstall <version>

// 5. 显示node.js x86 还是 x64

nvm arch

// 6. node.js 版本管理开启和关闭

nvm on    nvm off

// 7.设置node.js 镜像  默认是 https://nodejs.org/dist/

nvm node_mirror [url]  

//  8.设置 npm 镜像 不写是默认的

nvm npm_mirror [url]

// 9.设置存储不同版本的node.js 的目录未设置 默认是使用当前目录

nvm root [path]

// 显示 nvm 版本 

nvm --version

