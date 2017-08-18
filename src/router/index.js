import VueRouter from 'vue-router';
const Example = r => require.ensure([], () => r(require('../views/example/example.vue')), 'Example');
const Example1 = r => require.ensure([], () => r(require('../views/example/example1.vue')), 'Example1');

// 定义路由,
const routes = [{
	path: '/',
	component:Example
},{
	path:'/example1',
	component:Example1
}];

//创建 router 实例
const router = new VueRouter({
	mode: 'history',
	routes
});

export default router;