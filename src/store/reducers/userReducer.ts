import { User } from "../../models/User";
import { SET_USER_ACTION, UserDispatchTypes } from "../types/userActionTypes";

export interface UserState {
    user: User | null;
}

const defaultState: UserState = {
    user: localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')!) : null
}

export const userReducer = (state: UserState = defaultState, action: UserDispatchTypes): UserState => {
    switch(action.type) {
        case SET_USER_ACTION:
            if (action.payload == null)
                localStorage.removeItem('user');
            else
                localStorage.setItem('user', JSON.stringify(action.payload));
            return {
                user: action.payload
            }
        default:
            return state;
    }
}