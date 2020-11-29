
export const CONNECT_ACTION = "CONNECT_ACTION";

export type ConnectionData = {
    login: string;
    password: string;
}

export interface Connect {
    type: typeof CONNECT_ACTION;
    payload: ConnectionData;
}

export type LogingDispatchTypes = Connect;