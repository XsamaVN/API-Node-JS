import { Blog } from "../entity/Blog";
export declare class UserDTO {
    id: number;
    name: string;
    blogs: Blog[];
    constructor(id: number, name: string, blogs: Blog[]);
}
