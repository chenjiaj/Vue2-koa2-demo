/**
 * Created by chenjiajun on 2017/8/17.
 */
import Vue from 'vue';
import App from './views/app';
import VueRouter from 'vue-router';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

//注册路由插件
Vue.use(VueRouter);

new Vue({
	el: '#app',
	store,
	router,//将路由配置添加到vue实例中
	render: h => h(App)
});
