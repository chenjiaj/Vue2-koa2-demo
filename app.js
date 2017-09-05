/**
 * Created by chenjiajun on 2017/8/17.
 */
const Koa = require('koa');
const app = new Koa();
const Config = require('./config/config');
const proxy = require('./middleware/proxy');
const bodypaser = require('koa-body');
const router = require('koa-router')();
const onerror = require('koa-onerror');
const middleware = require('koa-webpack');
const history = require('./middleware/koa2-connect-history-api-fallback');
const koaStatic = require('koa-static');

//错误信息处理
onerror(app);

app.use(history({
	verbose: true
}));

if (app.env == 'development') {
	const webpackDevConf = require('./build/webpack.dev.conf');
	
	//开发环境使用webpack编译和热加载插件
	app.use(middleware({
		config: webpackDevConf,
		dev: {
			stats: {//打出日志的颜色
				colors: true
			}
		}
	}));
	
} else {
	app.use(koaStatic(__dirname + '/static'));
}

//控制台打印请求信息
app.use(async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(bodypaser());

app.use(proxy('/api', {
	target: Config.api.url
}));

app.use(router.routes()).use(router.allowedMethods());

app.listen(Config.node.port);