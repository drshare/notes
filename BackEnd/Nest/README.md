## Nestjs 

> Nestjs。用于构建高效、可扩展的Node.js 服务器端应用程序的框架。Nest同时兼容 JavaScript 和 TypeScript。
>
> Nest 采用MVC 的设计模式，结合 OOP（面向对象编程）FP（函数式编程）FRP（函数式响应 编程）的元素。

要求 Node.js >= （10.13.0， v13 除外）

目录结构

```
project
├── dist  部署目录
├── src  开发关注的部分
│   ├── app.module.ts  
│   ├── config 配置
│   │   └── db.ts
│   ├── main.ts 项目入口文件
│   ├── modules // 模块
│   │   └── user // 用户模块 MVC
│   │       ├── user.controller.ts 
│   │       ├── user.module.ts
│   │       └── user.service.ts
│   ├── typing // interface
│   │   ├── common.d.ts
│   │   ├── db.d.ts
│   │   └── user.d.ts
│   └── utils // 工具函数
│       └── db.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── README.md
├── tsconfig.build.json
├── tsconfig.json
├── nest-cli.json
├── package.json
├── yarn-error.log
└── yarn.lock
```



