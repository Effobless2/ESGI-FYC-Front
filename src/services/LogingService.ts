import axios from 'axios';
import User from '../models';

export class LogingService {
    async register(registrationDatas: User): Promise<number> {
        let body = {
            password: registrationDatas.password!,
            firstName: registrationDatas.firstName,
            lastName: registrationDatas.lastName,
            email: registrationDatas.email,
            role: 'user'
        };
        const response = await axios.post("http://localhost:8081/api/auth", body);
        return response.data;
    }
}