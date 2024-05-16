import {Blog} from "../entity/Blog";
import {Repository} from "typeorm";
import {AppDataSource} from "../data-source";

export class BlogRepository {
    private repository: Repository<Blog>;

    constructor() {
        this.repository = AppDataSource.getRepository(Blog);
    }

    findAll = async (): Promise<Blog[]> | null => {
        return this.repository.find(
            {
                relations: {
                    user: true
                }
            }
        );
    }

    save = async (blog: Blog): Promise<Blog> | null => {
        return this.repository.save(blog);
    }

    findById = async (id: number): Promise<Blog> | null => {
        return this.repository.findOneBy({
            id: id
        });
    }
    update = async (id: number, blog: Blog): Promise<Blog> => {
        blog.id = id
        return await this.repository.save(blog)
    }


    delete = async (id: number): Promise<void> | null => {
        await this.repository.delete({
            id: id
        });
    }
}