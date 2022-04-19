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
      
    // //   expense
    // async CreatePost({dispatch}, post) {
    //     await axios.post('post', post)
    //     await dispatch('GetPosts')
    //   },
      
};
const mutations = {

};
export default {
  state,
  getters,
  actions,
  mutations
};
