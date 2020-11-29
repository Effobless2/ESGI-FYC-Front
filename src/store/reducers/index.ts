import { combineReducers } from "@reduxjs/toolkit";
import { tokenReducer, TokenState } from "./tokenReducer";
import { userReducer, UserState } from "./userReducer";

const rootReducer = combineReducers({
    token: tokenReducer,
    user: userReducer
});

export default rootReducer;

export type State = TokenState & UserState;