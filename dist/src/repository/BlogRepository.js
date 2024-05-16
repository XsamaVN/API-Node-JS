"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRepository = void 0;
const Blog_1 = require("../entity/Blog");
const data_source_1 = require("../data-source");
class BlogRepository {
    constructor() {
        this.findAll = async () => {
            return this.repository.find({
                relations: {
                    user: true
                }
            });
        };
        this.save = async (blog) => {
            return this.repository.save(blog);
        };
        this.findById = async (id) => {
            return this.repository.findOneBy({
                id: id
            });
        };
        this.update = async (id, blog) => {
            blog.id = id;
            return await this.repository.save(blog);
        };
        this.delete = async (id) => {
            await this.repository.delete({
                id: id
            });
        };
        this.repository = data_source_1.AppDataSource.getRepository(Blog_1.Blog);
    }
}
exports.BlogRepository = BlogRepository;
//# sourceMappingURL=BlogRepository.js.map