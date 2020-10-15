import { Reducer } from "redux";
import { UserState } from "./user.state";

const initialState: UserState = {
  access_token: null,
  fullName: "",
};

export const userReducer: Reducer = (state = initialState, action) => {
  switch (action) {
    default:
      return state;
  }
};
