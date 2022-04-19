// import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/global.scss'
import store from './store'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = ' https://campaign.fundall.io/';

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount('#app')
// createApp(App).use(router,store).mount('#app')
