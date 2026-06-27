---
title: wan's blog的由来
cover: /images/favicon.png
date: 2026-04-15 23:18:21
categories:
  - 技术
tags:
  - Hexo
  - 教程
---
# 4.12 blog由来以及搭建

## 前言：

wan 看到视频里面和博客非常有意思，又想到写博客可以强化学习（费曼学习法本质），因此决定搞一个自己的试一下，也就是[[[wan_g](https://wan-g11.github.io/)]]网站的由来。（感觉确实不错啊,hexo搭建的）

感谢[【零成本】Hexo个人博客搭建教程 | 无需服务器_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Ju4m1c7WR/)

# 搭建：

先要有nodejs和git工具，（cmd）npm install hexo-cli -g下载hexo

## 搭建仓库

成功下载好工具之后，我们开始搭建GitHub存储静态页面的仓库

首先注册/登入[Github](https://github.com/)

点击Create a new repository进入新建仓库页面

仓库名输入：

```
用户名.github.io
```

勾选 Public

勾选 Add a README file

拉到下面点击create创建

## 生成SSH Keys

进入任意文件夹，右键空白处然后点Git bash here,输入

```
ssh-keygen -t rsa -C "邮件地址"
```

然后敲4次Enter⌨️

然后进入C:\Users\用户名，在里面进入.ssh文件

用记事本打开里面的id_rsa.pub,全选复制里面的代码

**然后打开github**

进入用户设置，找到SSH keys

新建SSH keys，名称随意，在下面粘贴代码，

然后创建

**测试是否成功**

在git bash中输入

```
ssh -T git@github.com
```

回车，然后再输入yes

## 本地生成博客内容

在喜欢位置新建文件Blog，然后进入文件夹

右键空白处然后点Git bash here，输入

```
hexo init
```

> 如果‘command not find’，就在前面加上npx，如：`npx hexo init`

然后

```
hexo install
```

接下来依次输入

```
hexo g
hexo s
```

（如果不成功的话就重复直到成功，因为国内与github连接不稳定）

现在就可以复制生成的链接进入浏览器看到我们生成的本地服务器了

然后回到命令行，ctrl+c关闭

## 上线博客

进入之前的Blog文件夹，用记事本打开_config.yml

拉到最下面将deploy后面的全删掉，复制粘贴这段

```
  type: git
  repository: 
  branch: main
```

> 注意缩进格式：每行前面都有两个空格不要删，每个冒号后面都有个空格也不要删！

去github之前生成的仓库页面，点code，复制https链接

将其粘贴到我们记事本中的 `repository：`后面

然后保存退出

**回到博客文件夹，git bash**

安装自动部署发布工具

```
npm install hexo-deployer-git --save
```

然后在Blog文件夹右键打开git bash，依次输入

```
hexo g（生成）
hexo d（上传）
```

> 如果是第一次使用git的话会需要配置（用过git连接github就不需要，直接就成功了）
>
> ```
> git config --global user.email "你的邮箱"
> git config --global user.name "你的名字"
> ```
>
> 配置完后再 `hexo d`上传
>
> 在跳出来的窗口内进行登录

接下来我们就成功把本地内容上传到github了

上传成功以后，我们就算搭建好了！上自己的网址看看吧

网址是我们之前设的仓库名：用户名.github.io

接下来就可以改config配置文件，把自己的网站搞的帅气了，

也可以下载插件，比如我的fluid主题[[[fluid-dev/hexo-theme-fluid: 🌊 一款 Material Design 风格的 Hexo 主题 / An elegant Material-Design theme for Hexo](https://github.com/fluid-dev/hexo-theme-fluid)]]

就是背景包括了首页和标签等很多很多东西,能省去一部分时间。

## 常用命令

清理缓存：hexo clean 旧的文章和主题啥的

生成静态文件：hexo g   (hexo generate) 这个博客本质是静态文件

本地预览：hexo s   (hexo server) 启动本地服务器看看效果（解决了部署的时候开始看不到变化问题）

一键部署： hexo d (hexo deploy)部署到你的网站上，别人就可以看到了。

    有时候你自己看不到变化，可以CTRL + F5强制刷新，也可以上GitHub看看上传好没。

也可以封装命令，三个一起调用，直接清理+生成+部署
