"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
const UserService_1 = require("./UserService");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JwtResponse_1 = require("../dto/JwtResponse");
class JwtService {
    constructor() {
        this.getToken = async (user) => {
            let userData = await this.userService.findNameAndPass(user);
            if (userData) {
                let payload = {
                    idUser: userData.id
                };
                let token = jsonwebtoken_1.default.sign(payload, JwtService.SECRET, { expiresIn: 36000 * 10 * 10 });
                return new JwtResponse_1.JwtResponse(token);
            }
            else {
                return null;
            }
        };
        this.getPayload = (authorization) => {
            let accessToken = authorization.split(' ')[1];
            if (accessToken) {
                try {
                    return jsonwebtoken_1.default.verify(accessToken, JwtService.SECRET);
                }
                catch (error) {
                    return false;
                }
            }
            else {
                return false;
            }
        };
        this.userService = new UserService_1.UserService();
    }
}
exports.JwtService = JwtService;
JwtService.SECRET = "123456";
//# sourceMappingURL=JwtService.js.map