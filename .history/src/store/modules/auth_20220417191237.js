//store/modules/auth.js

import axios from 'axios';
const state = {
    user: null,
    posts: null,
};
const getters = {

};
const actions = {
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
const mutations = {
    const mutations = {
        setUser(state, username){
            state.user = username
        },
        // setPosts(state, posts){
        //     state.posts = posts
        // },
        LogOut(state){
            state.user = null
            state.posts = null
        },
    };
    
};
export default {
  state,
  getters,
  actions,
  mutations
};
