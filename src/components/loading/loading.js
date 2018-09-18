/**
 * Created by chenjiajun on 2018/9/18.
 */
import Loading from './loading.vue';

export default {
  install(Vue, options = {}) {
    const VueComponent = Vue.extend(Loading);
    const vm = new VueComponent().$mount();
    let init = false;
    Object.assign(vm, options);

    Vue.prototype.$loading = {
      show: (opts = {}) => {
        Object.assign(vm, opts);
        if (!init) {
          document.body.appendChild(vm.$el);
          init = true;
        }
        vm.show();
      },
      hide() {
        vm.hide();
      }
    };
  }
};
