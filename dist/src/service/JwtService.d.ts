import { UserService } from "./UserService";
import { User } from "../entity/User";
import jwt from "jsonwebtoken";
import { JwtResponse } from "../dto/JwtResponse";
export declare class JwtService {
    static SECRET: string;
    userService: UserService;
    constructor();
    getToken: (user: User) => Promise<JwtResponse> | null;
    getPayload: (authorization: any) => string | false | jwt.JwtPayload;
}
