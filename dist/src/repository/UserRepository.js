"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const data_source_1 = require("../data-source");
const User_1 = require("../entity/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserRepository {
    constructor() {
        this.findAll = async () => {
            return this.repository.find({
                relations: {
                    blogs: true
                }
            });
        };
        this.findNameAndPass = async (user) => {
            let dataUser = await this.repository.findOneBy({ name: user.name });
            if (!dataUser) {
                return null;
            }
            else {
                let isCheckPassword = await bcrypt_1.default.compare(user.password, dataUser.password);
                if (isCheckPassword) {
                    return dataUser;
                }
                else {
                    return null;
                }
            }
        };
        this.save = async (user) => {
            return this.repository.save(user);
        };
        this.findById = async (id) => {
            return this.repository.findOneBy({
                id: id
            });
        };
        this.update = async (id, user) => {
            user.id = id;
            return await this.repository.save(user);
        };
        this.delete = async (id) => {
            await this.repository.delete({
                id: id
            });
        };
        this.findByName = async (user) => {
            return await this.repository.findOne({
                where: [
                    { name: user.name }
                ]
            });
        };
        this.repository = data_source_1.AppDataSource.getRepository(User_1.User);
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map