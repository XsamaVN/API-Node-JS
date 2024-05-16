import {Blog} from "../entity/Blog";

export class UserDTO {
    id: number;
    name: string;
    blogs: Blog[]


    constructor(id: number, name: string, blogs: Blog[]) {
        this.id = id;
        this.name = name;
        this.blogs = blogs;
    }
}