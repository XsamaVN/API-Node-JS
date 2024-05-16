import {UserService} from "../service/UserService";
import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";
import {Blog} from "../entity/Blog";
import {User} from "../entity/User";
import {JwtResponse} from "../dto/JwtResponse";
import {JwtService} from "../service/JwtService";
import {UserDTO} from "../dto/UserDTO";

export class UserController {
    private userService: UserService;
    private jwtService: JwtService;

    constructor() {
        this.userService = new UserService();
        this.jwtService = new JwtService();
    }


    findAll = async (req: Request, res: Response) => {
        const list = await this.userService.findAll();
        if (list.length === 0) {
            return res.status(StatusCodes.NO_CONTENT).json({message: "NO DATA"})
        }
        let data = []
        for (let i = 0; i < list.length; i++) {
            delete list[i].password;
            data.push(list[i])
        }
        return res.status(StatusCodes.OK).json(data);
    }
    register = async (req: Request<User>, res: Response) => {
        let user: User = await req.body;
        let dataUser = await this.userService.findByName(user);
        if (dataUser) {
            if (dataUser.name === dataUser.name) {
                return res.status(StatusCodes.CONFLICT).json({error: "Username already exists"})
            }
        } else {
            await this.userService.save(user);
            return res.status(StatusCodes.OK).json({message: "Register Success"});
        }
    }
    login = async (req: Request<User>, res: Response) => {
        let user: User = req.body;
        let jwtResponse: JwtResponse = await this.jwtService.getToken(user);
        if (jwtResponse) {
            return res.status(StatusCodes.OK).json(jwtResponse);
        } else {
            return res.status(StatusCodes.UNAUTHORIZED).json({message: "Username or Password is wrong"});
        }
    }
    update = async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id);
        const user: User = await this.userService.update(id, req.body);
        return res.status(StatusCodes.OK).json(user);
    }

    getOne = async (req, res: Response) => {
        const id: number = parseInt(req.params.id);
        const newsDetail: User = await this.userService.findById(id);
        return res.status(StatusCodes.OK).json(newsDetail);
    }

    delete = async (req, res: Response) => {
        const id: number = parseInt(req.params.id);
        await this.userService.delete(id);
        return res.status(StatusCodes.OK).json({message: `Remove id: ${id} success`});
    }
    getCurrentUser = async (req, res: Response) => {
        let id = req.decode.idUser;
        let currentUser: UserDTO = await this.userService.findById(id);
        if (currentUser) {
            return res.status(StatusCodes.OK).json(currentUser);
        }
        return res.status(StatusCodes.NO_CONTENT).json({error: "User not found"})
    }
}