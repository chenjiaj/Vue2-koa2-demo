/**
 * Created by chenjiajun on 2018/2/6.
 */
import Vue from 'vue';
import message from './message.vue';

const VueComponent = Vue.extend(message);

const vm = new VueComponent().$mount();
let init = false;

const alert = (options = {}) => {
  Object.assign(vm, options, {
    type: 'alert'
  });

  if (!init) {
    document.body.appendChild(vm.$el);
    init = true;
  }

  return vm.confirm();
};

export default alert;
