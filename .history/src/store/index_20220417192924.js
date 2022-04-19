import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
import createPersistedState from "vuex-persistedstate";
// import auth from './modules/auth';

// Load Vuex
Vue.use(Vuex);
// Create store
const store = new Vuex.Store ({
     state = {
        user: null,
        posts: null,
    };
     getters = {
         isAuthenticated: state => !!state.user,    
         // StatePosts: state => state.posts,
        StateUser: state => state.user,
        
        
    };
    actions = {
        // register
        async Register({dispatch}, form) {
            await axios.post('register', form)
            let UserForm = new FormData()
            UserForm.append('email', form.email)
            UserForm.append('password', form.password)
            UserForm.append('firstName', form.firstName)
            UserForm.append('lastName', form.lastName)
            await dispatch('LogIn', UserForm)
          },
        //   login
        async LogIn({commit}, User) {
            await axios.post('login', User)
            await commit('setUser', User.get('username','firstName','lastName'))
          },
          
        //   logout
        async LogOut({commit}){
            let user = null
            commit('logout', user)
          }
          
        // //   expense
        // async CreatePost({dispatch}, post) {
        //     await axios.post('post', post)
        //     await dispatch('GetPosts')
        //   },
          
    };
    mutations = {
        setUser(state, email){
            state.user = email
        },
        // setPosts(state, posts){
        //     state.posts = posts
        // },
        LogOut(state){
            state.user = null
           state.posts = null
        },
       
        
    };
})
export default {
    state,
    getters,
    actions,
    mutations
  };
// export default new Vuex.Store({
//   modules: {
//     auth
//   },
//   plugins: [createPersistedState()]
// });
