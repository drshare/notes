nuxt.config.ts

```javascript
// 路由和中间件
router: {
	middleware: ['auth'], // 验证登录中间件 开发中请注释
},
```

auth.js

```javascript
// 无需登录就可以访问的
const noLogin = [
    '/login',
    '/register',
    '/forgot',
    '/register-vip',
    '/product',
    '/help',
    '/contract',
];
// 判断当前访问的路径是不是不需要登录的
// isLoginPath 为 true 的时候不需要登录就可以访问
const isLoginPath = noLogin.some((item) => path.includes(item) || path === '/');
// 未登录判断
// 没有用户信息的时候 并且访问的路径需要登录 重定向到login
if (!(store.state.userInfo && store.state.userInfo.phone) && !isLoginPath) {
    app.$log('【auth.js】 --- 用户未登录，回到登录页面');
    redirect(`/login?url=${encodeURIComponent(fullPath)}`);
}
// 把原来的跳转路径通过query 编码传在url里面



const openedCdnPage = [
    '/cdn',
    '/cdn/domain',
    '/cdn/domain/create',
    '/cdn/domain/configure',
    '/cdn/certificate',
    '/cdn/certificate/create',
    '/cdn/traffic',
];
```

登录

调接口 loginWidthPwd 获取tocken

vuex setTocker 接口返回的tocken

调接口 getUserInfo 获取用户信息

vuex setUserInfo

保持登录

nuxtSererInit 



退出登录



















#!/bin/bash

# 前端环境变量

# 容器域名

DOMAIN=pcdev.boncloud.tech
export DOMAIN

# 容器IP

DOMAIN_IP=10.127.253.227
export DOMAIN_IP

# 前端接口访问地址
 OUT_TARGET=lbhdev.bonc.com.cn # 开发环境
# OUT_TARGET=lbhtest.lbhyun.com # 测试环境
# OUT_TARGET=www.boncloud.com # 生产环境
export OUT_TARGET

# 被替换的代码内接口地址
OUT_SOURCE=labahua.bonc.com.cn # 固定不变
export OUT_SOURCE

# 导航地址
NAV_TARGET=dnav # 开发环境
# NAV_TARGET=tnav # 测试环境
# NAV_TARGET=nav # 生产环境
export NAV_TARGET

# 导航被替换地址
NAV_SOURCE=navPath # 固定不变
export NAV_SOURCE

# 程序启动环境变量
ENV_FLAG=dev # 开发环境
# ENV_FLAG=test # 测试环境
# ENV_FLAG=production # 生产环境
export ENV_FLAG

# 接口加密开关（默认密文）
#ENCRYPT_TARGET=plaintext # 明文
ENCRYPT_TARGET=ciphetext # 明文
export ENCRYPT_TARGET
#ENCRYPT_SOURCE=ciphetext # 密文
ENCRYPT_SOURCE=plaintext # 密文
export ENCRYPT_SOURCE

# 前端域名价格
 PRICE_TARGET=55,29,72,9,12 # 开发环境
# PRICE_TARGET=55,29,72,9,12 # 测试环境
# PRICE_TARGET=55,29,72,9,12 # 生产环境
export PRICE_TARGET

# 被替换的域名价格
PRICE_SOURCE=1,1,1,1,1 # 固定不变
export PRICE_SOURCE

# 云市场地址
MARKET_TARGET=https://marketdev.bonc.com.cn
export MARKET_TARGET

# 环境变量
PATH=$PATH:/root/.nvm/versions/node/v12.13.0/bin
export PATH

# O2BI地址
DCPATH_TARGET=http://hsp.stress.com
export DCPATH_TARGET

# 边缘计算替换接口地址
EDGE_SOURCE=http://edge.bonc.tech
export EDGE_SOURCE

# 边缘计算访问地址
EDGE_TARGET=http://pcdev.bonc.tech
export EDGE_TARGET

# 边缘计算替换socket地址
EDGE_WS_SOURCE=ws://edge.bonc.tech
export EDGE_WS_SOURCE

# 边缘计算访问socket地址
EDGE_WS_TARGET=ws://pcdev.bonc.tech
export EDGE_WS_TARGET