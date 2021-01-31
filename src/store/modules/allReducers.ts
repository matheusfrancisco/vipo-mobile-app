import {combineReducers} from "@reduxjs/toolkit";


import profile from "./profile/index";
import answers from "./recommendations/index";

export const allReducer = combineReducers({
  profile: profile,
  answersQuestion: answers,
});

export type RootState = ReturnType<typeof allReducer>;
