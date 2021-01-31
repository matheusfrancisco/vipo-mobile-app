import {combineReducers} from "@reduxjs/toolkit";


import profile from "./profile/index";

export const allReducer = combineReducers({
  profile: profile,
});

export type RootState = ReturnType<typeof allReducer>;
