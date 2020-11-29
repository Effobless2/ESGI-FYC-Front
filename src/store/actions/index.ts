import { connectUser } from "./logingActions";
import { setToken } from "./tokenActions";
import { setUser } from './userActions';


type actions = typeof setToken | typeof setUser | typeof connectUser;

export default actions;