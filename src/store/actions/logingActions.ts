import { ConnectionData, CONNECT_ACTION } from '../types/LogingActionTypes';



export const connectUser = (data: ConnectionData) => ({
    type: CONNECT_ACTION,
    payload: data
});