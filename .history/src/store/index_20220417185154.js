import Vuex from 'vuex';
import { createApp } from 'vue'
import createPersistedState from "vuex-persistedstate";
import auth from './modules/auth';

// Load Vuex
createApp(App).use(Vuex).mount('#app')
// Create store
export default new Vuex.Store({
  modules: {
    auth
  },
  plugins: [createPersistedState()]
});
