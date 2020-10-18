import axios from 'axios';

import User from "../models";

export class UserService {
    async get(userId: number) : Promise<User> {
        const response = await axios.get(`http://localhost:8081/api/users/${userId}`);
        return response.data;
    }
}