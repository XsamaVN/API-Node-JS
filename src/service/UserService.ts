import {Service} from "./Service";
import {User} from "../entity/User";
import {UserRepository} from "../repository/UserRepository";
import bcrypt from "bcrypt";

export class UserService implements Service<User>{
    private userRepository: UserRepository
    constructor() {
        this.userRepository = new UserRepository()
    }



    findAll = async (): Promise<User[]> => {
        return await this.userRepository.findAll();
    }
    findNameAndPass = async (user: User): Promise<User> | null => {
        return this.userRepository.findNameAndPass(user);
    }

    findByName = (user: User): Promise<User> | null => {
        return this.userRepository.findByName(user);
    }
    save = async (user: User): Promise<User> => {
        user.password = await bcrypt.hash(user.password, 10);
        return this.userRepository.save(user);
    }

    findById = async (id: number): Promise<User> | null => {
        return this.userRepository.findById(id)
    }
    update = async (id: number, user: User): Promise<User> => {
        return await this.userRepository.update(id,user)
    }

    delete = async (id: number): Promise<void> => {

        await this.userRepository.delete(id)
    }


}