import { User } from "../entity/User";
export declare class BlogDTO {
    id: number;
    name: string;
    title: string;
    user: User;
    constructor(id: number, name: string, title: string, user: User);
}
