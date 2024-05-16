"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogController = void 0;
const BlogService_1 = require("../service/BlogService");
const http_status_codes_1 = require("http-status-codes");
class BlogController {
    constructor() {
        this.findAll = async (req, res) => {
            const list = await this.blogService.findAll();
            if (list.length === 0) {
                return res.status(http_status_codes_1.StatusCodes.NO_CONTENT).json({ message: "NO DATA" });
            }
            return res.status(http_status_codes_1.StatusCodes.OK).json(list);
        };
        this.save = async (req, res) => {
            const blog = await this.blogService.save(req.body);
            return res.status(http_status_codes_1.StatusCodes.CREATED).json(blog);
        };
        this.update = async (req, res) => {
            const id = parseInt(req.params.id);
            const blog = await this.blogService.update(id, req.body);
            return res.status(http_status_codes_1.StatusCodes.OK).json(blog);
        };
        this.getOne = async (req, res) => {
            const id = parseInt(req.params.id);
            const newsDetail = await this.blogService.findById(id);
            return res.status(http_status_codes_1.StatusCodes.OK).json(newsDetail);
        };
        this.delete = async (req, res) => {
            const id = parseInt(req.params.id);
            await this.blogService.delete(id);
            return res.status(http_status_codes_1.StatusCodes.OK).json({ message: `Remove id: ${id} success` });
        };
        this.blogService = new BlogService_1.BlogService();
    }
}
exports.BlogController = BlogController;
//# sourceMappingURL=BlogController.js.map