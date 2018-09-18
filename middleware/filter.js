/**
 * Created by kid on 2017/6/28.
 */
const noAuthApi = ['/api/login', '/verifyToken', '/touch', '/getPreview'];

const contains = (list, item) => {
  for (const i of list) {
    if (i === item) {
      return true;
    }
  }
  return false;
};

module.exports = async (ctx, next) => {
  if (contains(noAuthApi, ctx.req.url)) {
    await next();
  } else if (ctx.session.user) {
    await next();
  } else {
    ctx.body = {
      code: -3,
      message: '未登录'
    };
  }
};
