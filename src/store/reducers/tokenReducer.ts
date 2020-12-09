import { SET_TOKEN_ACTION, TokenDispatchTypes } from "../types/tokenActionTypes";

export interface TokenState {
    token: string;
}

const defaultState: TokenState = {
    token: localStorage.getItem('token') || ''
}

export const tokenReducer = (state: TokenState = defaultState, action: TokenDispatchTypes): TokenState => {
    switch(action.type) {
        case SET_TOKEN_ACTION:
            if (action.payload === '')
                localStorage.removeItem('token');
            else
                localStorage.setItem('token', action.payload);
            return { token: action.payload }
        default:
            return state;
    }
}