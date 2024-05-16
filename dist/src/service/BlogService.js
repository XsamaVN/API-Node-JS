"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const BlogRepository_1 = require("../repository/BlogRepository");
class BlogService {
    constructor() {
        this.findAll = async () => {
            return await this.blogRepository.findAll();
        };
        this.save = async (blog) => {
            return await this.blogRepository.save(blog);
        };
        this.findById = async (id) => {
            return this.blogRepository.findById(id);
        };
        this.update = async (id, blog) => {
            return await this.blogRepository.update(id, blog);
        };
        this.delete = async (id) => {
            await this.blogRepository.delete(id);
        };
        this.blogRepository = new BlogRepository_1.BlogRepository();
    }
}
exports.BlogService = BlogService;
//# sourceMappingURL=BlogService.js.map