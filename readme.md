本人平常喜欢用 nodejs 随便写写东西，但是每次都要操心创建项目、安装依赖等等前戏工作，并且并没有找到一个适合我的编码习惯的 repo, 于是乎写了个空的启动项目，方便以后写东西直接 clone 下来就行。

我觉得跟我一样的人应该很多，所以也把这个小东西分享给大家。

# koa-ts-starter

这是一个`koa`+`typescript`的起手式(简单的空环境)

```
├── Dockerfile
├── LICENSE
├── build.json
├── package.json
├── pnpm-lock.yaml
├── readme.md
├── src
│   ├── app
│   │   ├── index.ts
│   │   ├── readme.md
│   │   ├── routes.ts
│   │   └── whoami
│   │       └── index.ts
│   ├── config
│   │   └── index.ts
│   ├── logger
│   │   └── index.ts
│   ├── middleware
│   │   ├── decorateBody
│   │   │   └── index.ts
│   │   └── notFound
│   │       └── index.ts
│   └── server
│       ├── index.ts
│       └── readme.md
└── tsconfig.json
```

## 友情链接

- Koa2 [Koa (koajs) -- 基于 Node.js 平台的下一代 web 开发框架 | Koajs 中文文档](https://koa.bootcss.com/)
- Typescript [TypeScript 中文网 · TypeScript——JavaScript 的超集](https://www.tslang.cn/)

