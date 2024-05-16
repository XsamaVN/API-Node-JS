import {User} from "../entity/User";

export class BlogDTO {
    id: number;
    name: string;
    title: string;
    user:User
    constructor(id: number, name: string, title: string, user: User) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.user = user;
    }
}