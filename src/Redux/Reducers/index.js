import { combineReducers } from "redux";

import engineer from './reducerEngineer'
import user from './reducerUser';

const reducers = combineReducers({
  engineer,
  user
});

export default reducers;
