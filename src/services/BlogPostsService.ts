import axios, { AxiosResponse } from 'axios';
import { BlogPost } from "../models/BlogPost";
    
export class BlogPostsService {
    async get(id: number): Promise<BlogPost> {
        const result = await axios.get(`http://localhost:8081/api/posts/${id}`);
        result.data.createdAt = new Date(result.data.createdAt);
        return result.data;
    }

    async getAll(): Promise<BlogPost[]> {
        const result = await axios.get(`http://localhost:8081/api/posts/`);
        result.data.map((x: BlogPost) => x.createdAt = new Date(x.createdAt));
        return result.data;
    }

    async put(token: string, blogPost: BlogPost): Promise<BlogPost> {
        const result: { data: number } = await axios.put(`http://localhost:8081/api/posts/`, blogPost, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log(result);
        return blogPost;
    }

    async create(token: string, blogPost: BlogPost): Promise<BlogPost> {
        const result: { data: number } = await axios.post(`http://localhost:8081/api/posts/`, blogPost, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        blogPost.id = result.data;
        return blogPost;

    }

    async delete(token: string, id: number): Promise<boolean> {
        const result: AxiosResponse = await axios.delete(`http://localhost:8081/api/posts/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log(result);
        return result.status === 200;
    }

}