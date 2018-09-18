/**
 * Created by kid on 2017/5/17.
 */
const request = require('request');
const uuidV1 = require('uuid/v1');

const defaultOptions = {
  target: ''
};
const getData = opts => new Promise((resolve, reject) => {
  request(opts, (e, r, body) => {
    if (!e && body) {
      resolve(body);
    } else {
      reject(e);
    }
  });
});

module.exports = (context, options = defaultOptions) => async (ctx, next) => {
  const re = new RegExp(`^\\${context}(\\/|\\/\\w+)?`);
  const pass = re.test(ctx.req.url);

  if (!pass) return next();

  const url = ctx.req.url.replace('/api', options.target);
  const opts = {
    method: ctx.req.method,
    url,
    json: true,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  };
  if (ctx.req.method === 'POST') {
    const dataBody = ctx.request.body;
    if (dataBody.data) {
      Object.assign(dataBody.data, { uid: 'test' });
    } else {
      Object.assign(dataBody, { data: { uid: 'test' } });
    }
    Object.assign(opts, {
      body: Object.assign(dataBody, {
        gid: uuidV1()
      })
    });
  }
  ctx.body = await getData(opts);

  return next();
};
