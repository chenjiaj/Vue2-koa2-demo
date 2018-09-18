/**
 * Created by chenjiajun on 2018/9/14.
 */
export default [{
  name: 'example',
  path: '/',
  component: (resolve) => {
    require.ensure(['../views/example.vue'], () => {
      resolve(require('../views/example.vue'));
    });
  }
}];
