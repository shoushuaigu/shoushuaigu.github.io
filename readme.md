# HEXO博客系统
Hexo是一款基于Node.js的静态博客框架，依赖少易于安装使用，可以方便的生成静态网页托管在GitHub和Coding上，是搭建博客的首选框架。[官方文档](https://hexo.io/zh-cn/docs/one-command-deployment)进行详细查看。

---

## Hexo搭建
- 安装git
- 安装node
- 安装hexo
- github创建仓库
- 将hexo部署到github
### 安装hexo并创建bolg
```
npm i -g hexo-cli
hexo -v 检查安装是否成功
hexo init myblog
cd myblog
npm i
hexo g  构建
hexo server  开启服务
访问 localhost:4000 即可看到blog
```
### 部署blog到github.io访问
- 打开站点配置文件 _config.yml
找到deploy配置项
```
deploy:
  type: git
  repo: https://github.com/YourgithubName/YourgithubName.github.io.git
  branch: master
```
- 需要先安装deploy-git部署命令才能部署
```
npm install hexo-deployer-git --save
```
- 开始部署
```
hexo clean  清除之前构建的东西
hexo g      构建
hexo d      部署
```
- 注意deploy时可能要你输入username和password。过一会儿就可以在http://yourname.github.io 这个网站看到你的博客了！！
### 同时部署到coding方便国内访问
- 在coding创建新项目
- 修改_config.yml配置文件
```
deploy:
- type: 'git'
  repo: 'https://github.com/shoushuaigu/shoushuaigu.github.io'
  branch: 'master'
- type: 'git'
  repo: 'https://e.coding.net/shoushuaigu/victor-blog/victor-blog.git'
  branch: 'master'
```
- 部署(同上)
## 更换主题
- 官网选择主题
- 下载clone
- 放到themes文件夹
- 修改_config.yml
```
theme: landscape    主题文件夹名
```
- 主题相关配置
```
主题中_config.yml.example复制改名为_config.yml
配置相关项即可
```
### 搜索框
### 评论系统
### 文章中添加图片
- _config.yml配置post_asset_folder: true
- hexo new xxx  新建文章时会同事新建同名(xxx)文件夹
- 将文章所需图片放在xxx文件夹
- 文章中引入图片\!\[](a.png)
- 注意:a.png无需额外路径;本地服务和预览图片无法显示,但发布后正常显示
### 添加admin管理系统
- 安装插件hexo-admin
```
npm i hexo-admin --save
```
- 启动服务hexo server
- 访问localhost:4000/admin;即可进入管理页面
- 设置管理权限
  - 网站中点击右上角的settings，然后点击下面的 Setup authentification here 
  - 填写好用户名与密码，还有secret
  - 填好后,页面下方会自动生成配置信息,复制到_config.yml配置文件即可,重启服务访问,会提示输入账号密码

