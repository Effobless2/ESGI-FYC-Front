import axios from 'axios';
import User from "../models";


export class UserService {
    async get(userId: number) : Promise<User> {
        const response = await axios.get(`http://localhost:8081/api/users/${userId}`);
        return response.data;
    }

    async getAll() : Promise<User[]> {
        const response = await axios.get(`http://localhost:8081/api/users/`);
        return response.data;
    }

    async put(user: User): Promise<number> {
        let body = {
            id: user.id!,
            password: user.password!,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: 'user'
        };
        await axios.put(`http://localhost:8081/api/users/`, body);
        return user.id!;
    }

    async delete(userId: number) : Promise<any> {
        const response = await axios.delete(`http://localhost:8081/api/users/${userId}`);
        return response.data;
    }
}