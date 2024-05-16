"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../service/UserService");
const http_status_codes_1 = require("http-status-codes");
const JwtService_1 = require("../service/JwtService");
class UserController {
    constructor() {
        this.findAll = async (req, res) => {
            const list = await this.userService.findAll();
            if (list.length === 0) {
                return res.status(http_status_codes_1.StatusCodes.NO_CONTENT).json({ message: "NO DATA" });
            }
            let data = [];
            for (let i = 0; i < list.length; i++) {
                delete list[i].password;
                data.push(list[i]);
            }
            return res.status(http_status_codes_1.StatusCodes.OK).json(data);
        };
        this.register = async (req, res) => {
            let user = await req.body;
            let dataUser = await this.userService.findByName(user);
            if (dataUser) {
                if (dataUser.name === dataUser.name) {
                    return res.status(http_status_codes_1.StatusCodes.CONFLICT).json({ error: "Username already exists" });
                }
            }
            else {
                await this.userService.save(user);
                return res.status(http_status_codes_1.StatusCodes.OK).json({ message: "Register Success" });
            }
        };
        this.login = async (req, res) => {
            let user = req.body;
            let jwtResponse = await this.jwtService.getToken(user);
            if (jwtResponse) {
                return res.status(http_status_codes_1.StatusCodes.OK).json(jwtResponse);
            }
            else {
                return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({ message: "Username or Password is wrong" });
            }
        };
        this.update = async (req, res) => {
            const id = parseInt(req.params.id);
            const user = await this.userService.update(id, req.body);
            return res.status(http_status_codes_1.StatusCodes.OK).json(user);
        };
        this.getOne = async (req, res) => {
            const id = parseInt(req.params.id);
            const newsDetail = await this.userService.findById(id);
            return res.status(http_status_codes_1.StatusCodes.OK).json(newsDetail);
        };
        this.delete = async (req, res) => {
            const id = parseInt(req.params.id);
            await this.userService.delete(id);
            return res.status(http_status_codes_1.StatusCodes.OK).json({ message: `Remove id: ${id} success` });
        };
        this.getCurrentUser = async (req, res) => {
            let id = req.decode.idUser;
            let currentUser = await this.userService.findById(id);
            if (currentUser) {
                return res.status(http_status_codes_1.StatusCodes.OK).json(currentUser);
            }
            return res.status(http_status_codes_1.StatusCodes.NO_CONTENT).json({ error: "User not found" });
        };
        this.userService = new UserService_1.UserService();
        this.jwtService = new JwtService_1.JwtService();
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map