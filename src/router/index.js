import VueRouter from 'vue-router';
import Example from '../views/example/example.vue';
import Example1 from '../views/example/example1.vue';


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