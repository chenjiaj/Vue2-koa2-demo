/**
 * Created by chenjiajun on 2018/9/17.
 */
import Vue from 'vue';
import tip from './tip.vue';

const VueComponent = Vue.extend(tip);
const vm = new VueComponent().$mount();
let init = false;

const tips = (options = {}) => {
  Object.assign(vm, options);

  if (!init) {
    document.body.appendChild(vm.$el);
    init = true;
  }

  vm.show();
};

export default tips;
