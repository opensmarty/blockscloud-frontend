# blockscloud-frontend

积木云前端程序

# Blockscloud Web OS

这个系统从2014年最初的idea到2017年已经有两年半的时间了，时光荏苒。作者是一个php程序员，开发过程中总是为找一个好的、可扩展的后台模板而苦恼，积木云的早期版本使用了芒果云+onethink整合，但碍于芒果云不提供源码以及TP官方对onethink放弃支持，造成了旧版本积木云维护的异常困难。于是作者在2016年用更先进的laravel和vue重写了所有代码。开源不易，请尊重版权！ 

### 目录结构

```bash
├── /dist/           # 项目输出目录
├── /src/            # 项目源码目录
│ ├── /public/       # 公共文件，编译时copy至dist目录
│ ├── /components/   # UI组件及UI相关方法
│ │ ├── skin.less    # 全局样式
│ │ └── vars.less    # 全局样式变量
│ ├── /routes/       # 路由组件
│ │ └── app.js       # 路由入口
│ ├── /models/       # 数据模型
│ ├── /services/     # 数据接口
│ ├── /themes/       # 项目样式
│ ├── /mock/         # 数据mock
│ ├── /utils/        # 工具函数
│ │ ├── config.js    # 项目常规配置
│ │ ├── menu.js      # 菜单及面包屑配置
│ │ ├── config.js    # 项目常规配置
│ │ ├── request.js   # 异步请求函数
│ │ └── theme.js     # 项目需要在js中使用到样式变量
│ ├── route.js       # 路由配置
│ ├── index.js       # 入口文件
│ └── index.html     
├── package.json     # 项目信息
├── .eslintrc        # Eslint配置
└── .roadhogrc.js    # roadhog配置
```

文件夹命名说明:

-   components：组件（方法）为单位以文件夹保存，文件夹名组件首字母大写（如`DataTable`），方法首字母小写（如`layer`）,文件夹内主文件与文件夹同名，多文件以`index.js`导出对象（如`./src/components/Layout`）。
-   routes：页面为单位以文件夹保存，文件夹名首字母小写（特殊除外，如`UIElement`）,文件夹内主文件以`index.js`导出，多文件时可建立`components`文件夹（如`./src/routes/dashboard`），如果有子路由，依次按照路由层次建立文件夹（如`./src/routes/UIElement`）。

### 快速开始

进入目录安装依赖:

```bash
#开始前请确保没有安装roadhog、webpack到NPM全局目录
npm i 或者 yarn install
```

开发：

```bash
npm run build:dll #第一次npm run dev时需运行此命令，使开发时编译更快
npm run dev
打开 http://localhost:8000
```

构建：
[详情](https://github.com/zuiidea/antd-admin/issues/269)

```bash
npm run build

将会打包至dist/{version}目录 #package.json里version字段

npm run build:new

将会打包至dist/{version增加1}目录 #package.json里version字段
```

代码检测：

```bash
npm run lint
```

## FAQ

-   项目打包后如何部署？ [#269](https://github.com/zuiidea/antd-admin/issues/269)
- 如何做权限管理？ [#384](https://github.com/zuiidea/antd-admin/issues/384)
- 如何使用mock.js模拟接口，怎么使用线上接口？ [#348](https://github.com/zuiidea/antd-admin/issues/348)
- 如何使用Iconfont，如何使用本地的svg图标？ [#270](https://github.com/zuiidea/antd-admin/issues/270)
- 怎么按版本打包，上线时不影响正在访问的用户？ [#449](https://github.com/zuiidea/antd-admin/issues/449)
- windows处理CRLF？[参考](http://blog.csdn.net/lysc_forever/article/details/42835203)

    ```bash
    git config --global core.autocrlf false
    ```

## 官方支持

积木云QQ群：4110211

github地址:https://github.com/tangtanglove/blockscloud

coding地址:https://git.coding.net/tangtanglove/blockscloud.git

开发社区：http://www.cloudblocks.cn

运营网站：http://www.blockscloud.com

作者blog：http://www.ixiaoquan.com

## License

未获商业授权之前，不得将本软件用于商业用途（包括但不限于企业网站、经营性网站、以营利为目或实现盈利的网站）。购买商业授权请QQ:869716224。 不得对本软件或与之关联的商业授权进行出租、出售、抵押或发放子许可证。 禁止在 积木云 的整体或任何部分基础上以发展任何派生版本、修改版本或第三方版本用于重新分发。 如果您未能遵守本协议的条款，您的授权将被终止，所被许可的权利将被收回，并承担相应法律责任。
