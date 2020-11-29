import { User } from "./User";

export interface BlogPost {
    id?: number;
    title: string;
    content: string;
    createdAt: Date;
    idUser: number;
    user?: User;
}