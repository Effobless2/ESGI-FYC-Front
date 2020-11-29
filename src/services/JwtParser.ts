import jwt_decode from "jwt-decode";
import { User } from "../models/User";

class JwtParser {
    parse(token: string): User {
        let data: any = jwt_decode(token);
        return {
            id: data.id,
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName
        };
    }
}

const jwtParser = new JwtParser();
export default jwtParser;