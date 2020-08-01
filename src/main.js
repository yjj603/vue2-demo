import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import registered from '@/plugin/registered'
import axios from '@/plugin/axios'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/style/index.scss'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(registered);
Vue.use(axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
