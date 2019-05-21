import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false


import store from './store'
Vue.prototype.$store = store;
Vue.prototype.$store = store;


import {
  setStore,
  getStore,
  removeStore
} from '@/libs/storage'

Vue.prototype.setStore = setStore;
Vue.prototype.getStore = getStore;
Vue.prototype.removeStore = removeStore;

import {
  baseUrl
} from '@/common/whole'

Vue.prototype.baseUrl = baseUrl;

App.mpType = 'app'

const app = new Vue({
  ...App,
  store,
})
app.$mount()
