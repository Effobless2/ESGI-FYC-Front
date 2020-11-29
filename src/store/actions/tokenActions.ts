import { SET_TOKEN_ACTION } from '../types/tokenActionTypes';


export const setToken = (token: string) => ({
    type: SET_TOKEN_ACTION,
    payload: token
});