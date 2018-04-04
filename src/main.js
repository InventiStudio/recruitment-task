import './polyfills'
/* eslint-disable import/first */
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { sync } from 'vuex-router-sync'
/* eslint-enable import/first */
import App from './views/App'
import router from './router'
import store from './store'

Vue.use(Vuelidate)

sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
