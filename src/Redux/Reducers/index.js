import { combineReducers } from "redux";

import engineer from "./reducerEngineer";
import user from "./reducerUser";
import company from "./reducerCompany";

const reducers = combineReducers({
  engineer,
  user,
  company,
});

export default reducers;
