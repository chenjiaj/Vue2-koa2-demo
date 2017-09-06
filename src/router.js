/**
 * Created by chenjiajun on 2017/9/5.
 */
import Vue from 'vue'
import Router from 'vue-router'
import CompeRouter from './views/example/router'
import IndexRouter from './views/example/router'

//创建 router 实例
const router = new Router({
	mode: 'history',
	routes: [
		...IndexRouter,
		...CompeRouter
	]
})


export default router;