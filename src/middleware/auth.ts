import {StatusCodes} from "http-status-codes";
import {NextFunction, Response} from "express";
import {JwtService} from "../service/JwtService";

export const auth = async (req, res: Response, next: NextFunction) => {
    let jwtService = new JwtService();
    let authorization = req.headers.authorization;
    if (authorization) {
        let payload = jwtService.getPayload(authorization);
        if (payload) {
            req.decode = payload;
            next();
        } else {
            res.status(StatusCodes.UNAUTHORIZED).json({
                message: 'You are anonymous'
            });
        }
    } else {
        res.status(StatusCodes.UNAUTHORIZED).json({
            message: 'You are anonymous'
        });
    }
}