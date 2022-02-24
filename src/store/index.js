import { createStore } from "vuex";

export default createStore({
  state: {
    status: '',
    name: '',
    email: '',
    message: '',
    username: 'Elias',
    password: 'sdf',
    user: '',
    loggedIn: 'false'
  },
  mutations: {
    SET_STATUS(state, value){
      state.status = value
    },
    SET_FEEDBACK(state, feedback){
      state.name = feedback.name
      state.email = feedback.email
      state.message = feedback.message
    },
    SET_LOGGED_IN(state, value){
      state.loggedIn = value
    },
    SET_USER(state, value){
      state.user = value
    }
  },
  actions: {
    sendFeedback({commit}, feedback){
      commit('SET_STATUS', "Sending data")
      commit('SET_FEEDBACK', feedback)
        setTimeout(() => {
          commit('SET_STATUS', "Data sent succesfully")
          setTimeout(() => {
            commit('SET_STATUS', "")
          }, 5000);
        }, 1000);
    },
    logInAs({commit}, user){
      console.log(user)
      commit('SET_LOGGED_IN', true)
      commit('SET_USER', user)
    }
  },
  modules: {},
});
