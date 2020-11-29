import axios from 'axios';
import { User } from '../models/User';


const registerUrl = "http://localhost:8081/api/users/register"
const loginUrl = 'http://localhost:8081/api/auth/'

export class LogingService {
    async register(registrationDatas: User): Promise<number> {
        let body = {
            password: registrationDatas.password!,
            firstName: registrationDatas.firstName,
            lastName: registrationDatas.lastName,
            email: registrationDatas.email,
            role: 'user'
        };
        const response = await axios.post(registerUrl, body);
        return response.data;
    }

    static async login(login: string, password: string): Promise<string> {
        let body = {
            id: 0,
            email: login,
            password
        };
        const response = await axios.post(loginUrl, body);
        return response.data;
    }
}