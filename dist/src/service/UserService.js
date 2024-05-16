"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const UserRepository_1 = require("../repository/UserRepository");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    constructor() {
        this.findAll = async () => {
            return await this.userRepository.findAll();
        };
        this.findNameAndPass = async (user) => {
            return this.userRepository.findNameAndPass(user);
        };
        this.findByName = (user) => {
            return this.userRepository.findByName(user);
        };
        this.save = async (user) => {
            user.password = await bcrypt_1.default.hash(user.password, 10);
            return this.userRepository.save(user);
        };
        this.findById = async (id) => {
            return this.userRepository.findById(id);
        };
        this.update = async (id, user) => {
            return await this.userRepository.update(id, user);
        };
        this.delete = async (id) => {
            await this.userRepository.delete(id);
        };
        this.userRepository = new UserRepository_1.UserRepository();
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map