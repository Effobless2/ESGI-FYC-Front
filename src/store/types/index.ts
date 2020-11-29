import { LogingDispatchTypes } from './LogingActionTypes';
import { TokenDispatchTypes } from './tokenActionTypes';
import { UserDispatchTypes } from './userActionTypes';

type types = TokenDispatchTypes | UserDispatchTypes | LogingDispatchTypes;

export default types;