import Vuex from 'vuex';
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
