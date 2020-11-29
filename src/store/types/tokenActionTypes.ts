export const SET_TOKEN_ACTION = "SET_TOKEN";


export interface SetToken {
    type: typeof SET_TOKEN_ACTION;
    payload: string;
}

export type TokenDispatchTypes = SetToken;