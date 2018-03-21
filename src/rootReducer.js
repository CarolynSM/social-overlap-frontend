import { combineReducers } from "redux";

import user from "./reducer.js";

const rootReducer = combineReducers({
  user
});

export default rootReducer;
