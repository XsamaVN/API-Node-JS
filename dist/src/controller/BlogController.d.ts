import { Request, Response } from 'express';
export declare class BlogController {
    private blogService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    save: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getOne: (req: any, res: Response) => Promise<Response<any, Record<string, any>>>;
    delete: (req: any, res: Response) => Promise<Response<any, Record<string, any>>>;
}
