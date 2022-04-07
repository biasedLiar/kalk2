import axios from "axios";

import store from "@/store";
const queryString = require("query-string");
const shajs = require("sha.js");

const apiClient = axios.create({
  baseURL: "http://localhost:8081",
  withCredentials: false,
});

export default {
  setToken() {
    console.log("Starting search for tokens");
    console.log("Setting token: " + store.state.jwtToken);
    return {
      headers: {
        Authorization: "Bearer " + store.state.jwtToken,
      },
    };
  },
  getToken(username, password) {
    const hashedPass = shajs("sha256").update(password).digest("hex");
    const loginInfo = queryString.stringify({
      username: username,
      password: hashedPass,
    });
    return apiClient.post("/token", loginInfo);
  },
  buttonClicked(button){
    return apiClient.get('/Calc/' + button + "?userId=" + store.state.id, this.setToken());
  },
  getEquations(){
    return apiClient.get('/history/?userId=' + store.state.id, this.setToken());
  }
    
}