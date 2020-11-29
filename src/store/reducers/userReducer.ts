import { User } from "../../models/User";
import { SET_USER_ACTION, UserDispatchTypes } from "../types/userActionTypes";

export interface UserState {
    user: User | null;
}

const defaultState: UserState = {
    user: null
}

export const userReducer = (state: UserState = defaultState, action: UserDispatchTypes): UserState => {
    switch(action.type) {
        case SET_USER_ACTION:
            return {
                user: action.payload
            }
        default:
            return state;
    }
}