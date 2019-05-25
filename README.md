## Setup

1. clone this repo (当然你有可能已经下载好了) :

  ``` bash
  git clone https://github.com/fe8workshop/vue-workshop.git
  ```

2. 安装依赖 (主要用于运行测试代码) :

  ``` bash
  npm install
  or
  yarn install
  ```

## 事项

### 在 master 和 solution 切换 git branches

目前有两个分支:
- `master`: 用途类似于课前的预习材料，有一些习题供你在分享会前了解内容。
- `solution`: 用途类似于板书，目前有 习题的答案

切换分支可以使用下面指令:

``` bash
git checkout solution
```

``` bash
git checkout master
```

### 关于 `master` 分支

你可以根据 描述文件(通常是对应习题序号的 .md 文件)的信息 完成习题。

其实过一遍就好，目前我对 设计习题的内容 和 与其匹配的测试函数 还没什么把握，请你见谅

当然也欢迎你尝试之后与我反馈 ^__^

如果你打算尝试，可以配合 git 使用，并在完成测试查看 solution 分支的答案:

``` bash
git add -A
git commit -m 'working on exercise 1.1'
git checkout solution
```

### 关于 测试函数

目前每个习题都提供一个测试函数，帮助你判断答案是否正确。

在控制台使用指令即可进行测试

比如要测试 1.1-getter-setter.html 中的代码，只需要输入:

``` bash
npm test -t 1.1
or
yarn test -t 1.1
```

嗯~ 以此类推 (npm || yarn) test -t 加上对应序号就可以了

当然测试还提供了 watch 模式，指令如下:

``` bash
npm run watch
or
yarn run watch
```
