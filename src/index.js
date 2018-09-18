/**
 * Created by kid on 2017/5/15.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import myFetch from 'vue-fetch-plugin';
import app from './views/app.vue';
import router from './router';
import Alert from './components/pop/alert';
import Confirm from './components/pop/confirm';
import Tip from './components/pop/tip';
import Loading from './components/loading/loading';
import './static/js/flexible';

function GetUrlRelativePath() {
  const url = document.location.toString();
  const arrUrl = url.split('//');
  const start = arrUrl[1].indexOf('/');
  let relUrl = arrUrl[1].substring(start);// stop省略，截取从start开始到结尾的所有字符
  if (relUrl.indexOf('?') !== -1) {
    [relUrl] = relUrl.split('?');
  }
  return relUrl;
}

const myError = {
  code: -1,
  message: '服务器内部错误'
};
// 开启错误提示
Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(myFetch, {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    accept: 'application/json'
  },
  resFilter: (result) => {
    let temp;
    if (result.code === -3 && GetUrlRelativePath() !== '/') {
      window.location.href = '/';
      temp = false;
    }
    return temp;
  },
  resError: (res) => {
    console.log(res);
    return myError;
  }
});
Vue.use(Vuex);
Vue.use(Loading);

Vue.prototype.$alert = Alert;
Vue.prototype.$confirm = Confirm;
Vue.prototype.$tip = Tip;


new Vue({
  el: '#app',
  router,
  render: h => h(app)
});
