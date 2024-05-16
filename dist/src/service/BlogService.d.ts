import { Blog } from "../entity/Blog";
import { Service } from "./Service";
export declare class BlogService implements Service<Blog> {
    private blogRepository;
    constructor();
    findAll: () => Promise<Blog[]>;
    save: (blog: Blog) => Promise<Blog>;
    findById: (id: number) => Promise<Blog> | null;
    update: (id: number, blog: Blog) => Promise<Blog>;
    delete: (id: number) => Promise<void>;
}
