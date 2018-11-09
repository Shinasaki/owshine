// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue';
import VeeValidate from 'vee-validate';
import VueResource from 'vue-resource';
import VueSweetalert2 from 'vue-sweetalert2';
import router from './router'
import store from './store/main';
import VueLazyLoad from 'vue-lazyload';

import '@scss/app.scss';
import 'bootstrap/dist/css/bootstrap.css'



Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(VeeValidate);
Vue.use(VueSweetalert2);
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  loading: '../static/images/lazy/lazyload.svg',
  attempt: 1
});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
