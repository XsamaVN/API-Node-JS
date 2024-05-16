import { Blog } from "../entity/Blog";
export declare class BlogRepository {
    private repository;
    constructor();
    findAll: () => Promise<Blog[]> | null;
    save: (blog: Blog) => Promise<Blog> | null;
    findById: (id: number) => Promise<Blog> | null;
    update: (id: number, blog: Blog) => Promise<Blog>;
    delete: (id: number) => Promise<void> | null;
}
