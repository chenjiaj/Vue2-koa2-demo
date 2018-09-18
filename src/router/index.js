/**
 * Created by kid on 2017/5/17.
 */
import VueRouter from 'vue-router';
import Error from './error';
import Example from './example';

const routes = [
  ...Example,
  ...Error
];
const router = new VueRouter({
  mode: 'history',
  routes
});

/**
 * 功能：跳转到各个页面前判断是否绑定宽带账号
 * whiteList 白名单，不需要判断是否绑定即可访问的页面
 * 1.判断token是否存在，存在表示已绑定，直接进入访问的页面
 * 2.token不存在，请求认证接口，返回token,表示已绑定，直接进入访问的页面
 * 3.认证失败，表示未绑定，跳转到绑定页面
 */
// router.beforeEach(async (to, from, next) => {
//   const whiteList = ['/error'];
//   const token = localStorage.getItem('token');
//
//   if (token) {
//     next();
//   } else if (whiteList.indexOf(to.path) !== -1) {
//     next();
//   } else {
//     const result = await this.$post('url', { name: 'kid' });
//     if (result.code === 0) {
//       localStorage.setItem('token', token);
//       next();
//     } else {
//       next('/');
//     }
//   }
//
//   next();
// });

export default router;
