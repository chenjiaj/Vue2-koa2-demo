export default [{
  name: 'error',
  path: '*',
  component: (resolve) => {
    require.ensure(['../views/error.vue'], () => {
      resolve(require('../views/error.vue'));
    });
  }
}];
