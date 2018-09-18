/**
 * Created by kid on 2017/5/15.
 */
const Koa = require('koa');
const bodypaser = require('koa-body');
const staticCache = require('koa-static-cache');
const path = require('path');
const favicon = require('koa-favicon');
const webpack = require('webpack');
const koaWebpack = require('koa-webpack');

const history = require('./middleware/koa2-connect-history-api-fallback');
const proxy = require('./middleware/proxy');
const config = require('./config');

const app = new Koa();
const { port } = config.node;

app.use(async (ctx, next) => {
  ctx.res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  if (ctx.method === 'PATCH' || ctx.method === 'OPTIONS' || ctx.method === 'DELETE' || ctx.method === 'HEAD' || ctx.method === 'PUT') {
    ctx.response.status = 403;
  } else {
    await next();
  }
});

app.use(history({
  verbose: true
}));

app.use(favicon(`${path.join(__dirname)}/favicon.ico`));

if (app.env === 'development') {
  const webpackDevConfig = require('./build/webpack.dev.config');
  const compiler = webpack(webpackDevConfig);

  app.use(koaWebpack({
    compiler
  }));
} else {
  app.use(staticCache(path.join(__dirname, '/dist')));
}

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(bodypaser());

app.use(proxy('/api', {
  target: config.api.url
}));

app.listen(port, () => console.log(`🚀 Server ready at http://localhost:${port}`));
