安装和启动
------------
* 安装nodejs（版本8.9+）
* 安装yarn，建议通过npm安装（npm install yarn -g）
* cd到相应目录，安装依赖`yarn install`或者`npm install`
* 执行`yarn start:dev`或者`npm start:dev`、`node app`启动

打包
------------
* 打包前请检查__package.json__中的版本号，原则上与项目版本号保持一致
* 执行`yarn run build`，会打包压缩文件至根目录下的pkg文件夹


部署
------------
* 依赖：全局安装yarn、pm2、node
* 部署：执行`yarn run prod`，将通过pm2启动以项目名为name的任务


代码质量
------------
* 执行`yarn add --dev babel-eslint eslint eslint-config-airbnb-base eslint-plugin-html eslint-plugin-import eslint-plugin-jsx-a11y husky lint-staged`，安装依赖;
* 执行`yarn global add eslint`，安装全局eslint;
* 代码检测设置：以webstorm为例，设置 / Languages & Frameworks / JavaScript / Code Quality Tools / ESLint，勾选Enable；
* 代码风格设置：Editor / Code Style / JavaScript，Tabs and Indents选项卡不勾选Use tab character，全部设置为2；Spaces选项卡，找到Within，勾选Object literal braces 和 ES6 import/export braces（windows系统需要把换行符设置为\n，在设置 / Code Style 处对Line separator进行设置）；
* package.json设置：`scripts` 属性更改为

    `"scripts": {
        "pm2_start": "pm2 start pm2.json",
        "release": "gulp",
        "start": "node app.js",
        "precommit": "lint-staged"
    }`

    增加属性

    `"lint-staged": {
      "src/**/*.{js,vue}": "eslint"
    }`
