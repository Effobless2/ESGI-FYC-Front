import { User } from "../../models/User";

export const SET_USER_ACTION = "SET_USER";


export interface SetUser {
    type: typeof SET_USER_ACTION;
    payload: User;
}

export type UserDispatchTypes = SetUser;