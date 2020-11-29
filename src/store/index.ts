import { createStore } from "redux";
import middlewares from "./middlewares";
import rootReducer, { State } from "./reducers";

const store = createStore(rootReducer, middlewares);

export type StoreType = ReturnType<typeof rootReducer>

export type RootState = State;

export default store;