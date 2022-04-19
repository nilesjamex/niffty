import { createApp } from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import router from './router'
import '@/styles/global.scss'
import store from './store'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = ' https://campaign.fundall.io/';

Vue.config.productionTip = false

createApp(App).use(router,store).mount('#app')
