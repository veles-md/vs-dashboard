import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";

export const rootEpic = combineEpics();
export const rootReducer = combineReducers({
  user: userReducer,
});
