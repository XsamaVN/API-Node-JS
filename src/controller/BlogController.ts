import {BlogService} from "../service/BlogService";
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import {Blog} from "../entity/Blog";
export class BlogController{
    private blogService:BlogService
    constructor() {
        this.blogService = new BlogService();
    }
    findAll = async (req: Request, res: Response)=>{
        const list = await this.blogService.findAll();
        if (list.length === 0) {
            return res.status(StatusCodes.NO_CONTENT).json({message: "NO DATA"})
        }
        return res.status(StatusCodes.OK).json(list);
    }
    save = async (req: Request, res: Response) => {
        const blog: Blog = await this.blogService.save(req.body);
        return res.status(StatusCodes.CREATED).json(blog);
    }
    update = async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id) ;
        const blog: Blog = await this.blogService.update(id,req.body);
        return res.status(StatusCodes.OK).json(blog);
    }

    getOne = async (req, res: Response) => {
        const id: number = parseInt(req.params.id);
        const newsDetail: Blog = await this.blogService.findById(id);
        return res.status(StatusCodes.OK).json(newsDetail);
    }

    delete = async (req, res: Response) => {
        const id: number = parseInt(req.params.id);
        await this.blogService.delete(id);
        return res.status(StatusCodes.OK).json({message: `Remove id: ${id} success`});
    }

}