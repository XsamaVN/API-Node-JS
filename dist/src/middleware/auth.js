"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const http_status_codes_1 = require("http-status-codes");
const JwtService_1 = require("../service/JwtService");
const auth = async (req, res, next) => {
    let jwtService = new JwtService_1.JwtService();
    let authorization = req.headers.authorization;
    if (authorization) {
        let payload = jwtService.getPayload(authorization);
        if (payload) {
            req.decode = payload;
            next();
        }
        else {
            res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
                message: 'You are anonymous'
            });
        }
    }
    else {
        res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
            message: 'You are anonymous'
        });
    }
};
exports.auth = auth;
//# sourceMappingURL=auth.js.map