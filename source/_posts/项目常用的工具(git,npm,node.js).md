---
title: 项目常用工具git，node.js，npm
date: 2026-04-19 15:30:00
cover: /images/unsplash-circuit.jpg
categories: 技术
tags:
  - Git
  - npm
  - Node.js
---

# 项目常用工具git，node.js，npm

## 1.0定义or介绍，以及常用命令

git、npm和node都是命令行工具 (CLI) ，也有GUI (图形化界面)

### git

分布式版本控制工具，跟踪文件的变更历史，记录版本可回退，有分支，可以对分支进行多种操作 (合并，切换，拉取...) 利于多人协作开发。

先git clone远程仓库

日常开发流程

```
工作区(Working Directory) → 暂存区(Staging Area) → 本地仓库(Local Repo) → 远程仓库(Remote/云端)
```

#### 四个区域

| 区域               | 是什么                                  | 对应命令                    |
| ------------------ | --------------------------------------- | --------------------------- |
| **工作区**   | 你实际编辑代码的文件夹                  | 你用 VS Code 改文件         |
| **暂存区**   | 临时放"这次要提交的改动"的地方          | `git add `                |
| **本地仓库** | 你电脑上 `.git/` 文件夹里的版本数据库 | `git commit`              |
| **远程仓库** | 云端服务器上的代码仓库                  | `git push` / `git pull` |

#### 常用命令

1. 编辑文件
2. 查看改了啥
   git status # 看哪些文件变了
   git diff # 看具体改了什么内容（可以点击文件树那边的文件去看更改）
3. 加到暂存区（选哪些改动要提交）
   git add app.py # 只加这一个文件
   git add . # 加全部改动
4. 提交到本地仓库（存一个版本记录）
   git commit -m "修复登录bug"（git commit也行，有编辑器）
5. 推送到远程云端
   git push origin 你的分支
6. 别人更新了，你拉下来
   git pull 分支名

> **分清楚：**
> - `git fetch`：只下载云端的新内容，不改你的代码
> - `git pull`：下载 + 自动合并到你的代码里
> - 暂存区：临时中转站，你可以反复 `git add`
> - 本地仓库：`commit` 之后才存进去，产生一个带时间戳和备注的版本记录，利于回退

还有常用命令：

git branch :查看所有分支（当前分支标 *）

git branch 分支名   : 新建分支（不会切换过去）

git checkout 分支名 :切换到这个分支，新版 Git 也用 (效果一样)`git switch 分支名`

git branch -d 分支名：删除分支


```bash
git merge feature-login # 把两个本地分支合并
git pull origin main # 把远程分支拉下来合并到当前分支==fetch+merge
```


合并分支：（合并两个本地分支）

git checkout main
git fetch --all # 拉取云端最新信息（不改动代码）
git pull  分支# 下载 + 合并云端的最新代码
git merge 分支 # 再合并你的分支

这里的 pull 是同步远程最新代码，merge 是合并本地分支，两件事。

拉取分支开发：

git pull 即可



<hr>

### npm

(Node Package Manager) node.js的默认包管理，用于安装，管理，发布JavaScript和TypeScrpit的库，常用于前端启动（npm run dev运行package.json的脚本命令）

#### 常用命令

```bash
npm install # 安装所有依赖，package.json 里列出的所有依赖，先cd到这个目录
npm run dev # 启动开发，启动package.json里的脚本
npm run build # 打包构建，把开发代码转成浏览器能直接跑的、优化过的、压缩过的最终产物。
```


<hr>

### node.js

基于 Chrome V8 引擎的 JavaScript 运行环境，让 JS 能脱离浏览器在本地/服务器端直接执行，npm run dev其实是快捷方式，底层是 node 去运行构建工具（如 vite），vite 再处理你的项目文件

#### 常用命令

```
npm run dev
 → 读取 package.json 里的 scripts.dev 字段
 → 发现是 vite（或 webpack）
 → 本质执行的是：node ./node_modules/.bin/vite
```

node_modules 是npm下载的包，.bin里面是包里的可执行命令，vite就是 vite 这个工具的启动文件，npm 帮助我们

1. `.bin/` 目录自动加入系统 PATH，你在终端直接输入 `vite` 就行
2. `package.json` 里配好 scripts，用 `npm run dev` 代替

```bash
node app.js # 运行 JS 文件
npx vite # 不安装直接临时运行一个包
```

用的不多

```bash
# 这两个效果相同
vite --host --port 4000
npm run dev # 假设 scripts.dev = "vite --host --port 4000"
```
