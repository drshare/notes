# Yarn 和 NPM 国内镜像—淘宝镜像

### 1. npm

查询当前镜像

```
npm get registry 
```

设置为淘宝镜像

```
npm config set registry https://registry.npm.taobao.org/
```

设置为官方镜像

```
npm config set registry https://registry.npmjs.org/
```

### 2. yarn

查询当前镜像

```
yarn config get registry
```

设置为淘宝镜像

```
yarn config set registry https://registry.npm.taobao.org/
```

设置为官方镜像

```
yarn config set registry https://registry.yarnpkg.com
```



修改安装和缓存位置

```
yarn config set global-folder ""
yarn config set prefix ""
```



除了淘宝镜像还有什么镜像

yarn add 

yarn remove

yarn upgrade