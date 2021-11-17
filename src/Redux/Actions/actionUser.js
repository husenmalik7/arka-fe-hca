import axios from "axios";

// const URL = "http://localhost:9000/engineer";

export const loginUser = (URL, data) => {
  return {
    type: "LOGIN_USER",
    payload: axios.get(URL, data),
  };
};
