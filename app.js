/**
 * Created by chenjiajun on 2017/8/17.
 */
const Koa = require('koa');
const app = new Koa();
const Config = require('./config/config');
const onerror = require('koa-onerror');
const middleware = require('koa-webpack');
const webpackDevConf = require('./build/webpack.dev.conf');
const history = require('./middleware/koa2-connect-history-api-fallback');

//错误信息处理
onerror(app);

app.use(history({
	verbose: true
}));

//开发环境使用webpack编译和热加载插件
app.use(middleware({
	config: webpackDevConf,
	dev: {
		stats: {//打出日志的颜色
			colors: true
		}
	}
}));

//控制台打印请求信息
app.use(async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.listen(Config.node.port);