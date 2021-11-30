// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.prototype.$axios = axios
Vue.prototype.$url = 'http://127.0.0.1:8000/'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});