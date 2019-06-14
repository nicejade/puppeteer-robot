<p align="center">
  <a href="https://www.jeffjade.com/2017/12/17/134-kinds-of-toss-using-puppeteer/" target="_blank"><img width="100"src="https://raw.githubusercontent.com/nicejade/puppeteer-robot/master/src/assets/images/robot.png"></a>
</p>

<h1 align="center">
  <strong>Puppeteer Robot</strong>
</h1>

<div align="center">
  🤖A simple robot built with Puppeteer to to help automate some precise things.
</div>

<br>

<div align="center">
  <a href="https://nodejs.org/en/">
    <img src="https://img.shields.io/badge/node-%3E%3D%208.0.0-green.svg" alt="node version">
  </a>
  <a href="https://github.com/nicejade/puppeteer-robot">
    <img src="https://img.shields.io/github/license/nicejade/puppeteer-robot.svg" alt="LICENSE">
  </a>
  <a href="https://nicelinks.site/post/5c16083e819ae45de1453caa">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat" alt="Prettier">
  </a>
  <a href="https://wwww.jeffjade.com/?utm_source=github.com">
    <img src="https://img.shields.io/badge/Blog-jeffjade.com-%23a696c8.svg" alt="nicejade Homepage">
  </a>
  <a href="https://aboutme.lovejade.cn/?utm_source=github.com">
    <img src="https://img.shields.io/badge/Author-nicejade-%23a696c8.svg" alt="Author nicejade">
  </a>
</div>

### English | [中文](https://www.jeffjade.com/2019/06/14/156-puppeteer-robot/)

## Goal and Philosophy

In this intelligence era of digital information, even individuals, it is necessary to use a variety of tools to create their own automated robots to help complete some precise things, so that you can save more time to learn or do more meaningful; based on the newly acquired skills, in turn, improve and perfect the automation process; thus, form a virtuous circle, persist in reciprocation, so that gain more competitiveness in this great battle, in order to achieve the life you want. The establishment of [this repository](https://github.com/nicejade/puppeteer-robot) is an initial attempt to achieve this goal.

Up to now, it can do the following things:

- Specify the time every day, automatically log in to [hacpai.com](https://hacpai.com/register?r=jeffjade) website, and sign in.

## Prerequisites

`Puppeteer` requires at least [Node.js](https://nodejs.org/en/) v6.4.0, but the examples below use async/await which is only supported in Node v7.6.0 or greater.

## Installation

```bash
# 🎉 clone the project
git clone https://github.com/nicejade/puppeteer-robot.git your-project-name
cd your-project-name

# ➕ install dependencies & start dev
yarn
```

In addition, you need to download `Chromium` separately (Chinese users can download it on demand according to the system in [Taobao Mirrors](https://npm.taobao.org/mirrors/chromium-browser-snapshots/)) and put it in the root directory of the project; of course, you can also modify the code to specify other locations where it is located.

## Usage

>In the `src/config` directory, you need create a `secret.js` in accordance with the format of `secretSample.js` and modify the configuration (🍀️).

```bash
yarn start
```

## Useful links

- [Headless Chrome Node API](https://pptr.dev/)
- [Awesome Puppeteer Curated List](https://github.com/transitive-bullshit/awesome-puppeteer)
- [大前端神器安利之 Puppeteer](https://www.jeffjade.com/2017/12/17/134-kinds-of-toss-using-puppeteer/)

## Related Links

- [**倾城之链**](https://nicelinks.site?utm_source=github.com)
- [About Me](https://about.me/nicejade?utm_source=github.com)
- [晚晴幽草轩](https://jeffjade.com/nicelinks?utm_source=github.com)
- [静轩之别苑](https://quickapp.lovejade.cn/?utm_source=github.com)
- [静晴轩别苑](https://nice.lovejade.cn/?utm_source=github.com)
- [天意人间舫](https://blog.lovejade.cn/?utm_source=github.com)
- [新浪微博](https://weibo.com/jeffjade?utm_source=github.com)
- [知乎主页](https://www.zhihu.com/people/yang-qiong-pu/)
- [简书主页](https://www.jianshu.com/u/9aae3d8f4c3d)
- [SegmentFault](https://segmentfault.com/u/jeffjade)
- [Twitter](https://twitter.com/nicejadeyang)
- [Facebook](https://www.facebook.com/nice.jade.yang)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, [nicejade](https://aboutme.lovejade.cn/?utm_source=github.com).
