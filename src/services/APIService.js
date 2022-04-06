import axios from "axios";

import store from "@/store";
const queryString = require("query-string");
const shajs = require("sha.js");

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
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
    getSubjects() {
      return apiClient.get(
        "/subject?userId=" + store.state.user.ID,
        this.setToken()
      );
    },
}