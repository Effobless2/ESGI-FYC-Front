import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { User } from "../../../models/User";
import jwtParser from "../../../services/JwtParser";
import { LogingService } from "../../../services/LogingService";
import { setToken } from "../../actions/tokenActions";
import { setUser } from "../../actions/userActions";
import ActionType from '../../types';
import { CONNECT_ACTION } from "../../types/LogingActionTypes";

const LogingMiddleware: Middleware<{}, RootState> = store => next => (action: ActionType) => {
    switch(action.type) {
        case CONNECT_ACTION:
            LogingService.login(action.payload.login, action.payload.password)
                .then((result) => {
                    let user: User = jwtParser.parse(result);
                    next(setToken(result));
                    next(setUser(user));
                })
    }
}

export default LogingMiddleware;