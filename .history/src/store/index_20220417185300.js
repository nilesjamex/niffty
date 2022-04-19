import Vuex from 'vuex';
import { createApp } from 'vue'
import App from './App.vue'
import createPersistedState from "vuex-persistedstate";
import auth from './modules/auth';

// Load Vuex
// Create store
export default new Vuex.Store({
  modules: {
    auth
  },
  plugins: [createPersistedState()]
});
