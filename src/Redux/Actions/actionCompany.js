import axios from "axios";

// const URL = "http://localhost:9000/engineer";

export const getCompanyById = (URL) => {
  return {
    type: "GET_COMPANY_BY_ID",
    payload: axios.get(URL),
  };
};
