/**
 * Created by chenjiajun on 2018/2/6.
 */
import Vue from 'vue';
import message from './message.vue';

const VueComponent = Vue.extend(message);
const vm = new VueComponent().$mount();
let init = false;

const confirm = (options = {}) => {
  Object.assign(vm, options, {
    type: 'confirm',
    yesBtnText: '确定',
    noBtnText: '取消'
  });

  if (!init) {
    document.body.appendChild(vm.$el);
    init = true;
  }

  return vm.confirm();
};

export default confirm;
