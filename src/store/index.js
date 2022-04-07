import { createStore } from "vuex";

export default createStore({
  state: {
    status: '',
    password: 'sdf',
    user: '',
    loggedIn: false,
    jwtToken: "",
    id: '',
  },
  mutations: {
    SET_STATUS(state, value){
      state.status = value
    },
    SET_TOKEN(state, value) {
      state.loggedIn = true;
      state.jwtToken = value;
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
      state.user = value.username;
      state.id = value.id;
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
    logInAs({ commit }, value) {
      commit("SET_TOKEN", value.token);
      commit('SET_USER', value.user);
    },
  },
  modules: {},
});
