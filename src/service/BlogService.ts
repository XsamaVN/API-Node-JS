import {Blog} from "../entity/Blog";
import {Service} from "./Service";
import {BlogRepository} from "../repository/BlogRepository";

export class BlogService implements Service<Blog> {
    private blogRepository: BlogRepository
constructor() {
        this.blogRepository = new BlogRepository()
}

    findAll = async (): Promise<Blog[]> => {
        return await this.blogRepository.findAll();
    }
    save = async (blog: Blog): Promise<Blog> => {
        return await this.blogRepository.save(blog)
    }

    findById = async (id: number): Promise<Blog> | null => {
        return this.blogRepository.findById(id);
    }
    update = async (id: number, blog: Blog): Promise<Blog> => {
        return await this.blogRepository.update(id,blog)
    }

    delete = async (id: number): Promise<void> => {
        await this.blogRepository.delete(id)
    }

}