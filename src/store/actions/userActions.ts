import { User } from '../../models/User';
import { SET_USER_ACTION } from '../types/userActionTypes';


export const setUser = (user: User | null) => ({
    type: SET_USER_ACTION,
    payload: user
});