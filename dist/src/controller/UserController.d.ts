import { Request, Response } from "express";
import { User } from "../entity/User";
export declare class UserController {
    private userService;
    private jwtService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    register: (req: Request<User>, res: Response) => Promise<Response<any, Record<string, any>>>;
    login: (req: Request<User>, res: Response) => Promise<Response<any, Record<string, any>>>;
    update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getOne: (req: any, res: Response) => Promise<Response<any, Record<string, any>>>;
    delete: (req: any, res: Response) => Promise<Response<any, Record<string, any>>>;
    getCurrentUser: (req: any, res: Response) => Promise<Response<any, Record<string, any>>>;
}
