import axios from 'axios';

export class ControllerService {
    async get(): Promise<number[]> {
        const response =
            await axios.get("http://localhost:8081/home");
        return response.data;
    }
}