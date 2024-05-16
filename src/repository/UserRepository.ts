import {Repository} from "typeorm";
import {AppDataSource} from "../data-source";
import {User} from "../entity/User";
import bcrypt from "bcrypt";

export class UserRepository{
    private repository: Repository<User>;

    constructor() {
        this.repository = AppDataSource.getRepository(User);
    }

    findAll = async (): Promise<User[]> | null => {
        return this.repository.find(
            {
                relations:{
                    blogs:true
                }
            }
        );
    }
    findNameAndPass = async (user: User): Promise<User> | null => {
        let dataUser: User = await this.repository.findOneBy({name: user.name});
        if (!dataUser) {
            return null;
        } else {
            let isCheckPassword = await bcrypt.compare(user.password, dataUser.password);
            if (isCheckPassword) {
                return dataUser;
            } else {
                return null;
            }
        }
    }


    save = async (user: User): Promise<User> | null => {
        return this.repository.save(user);
    }

    findById = async (id: number): Promise<User> | null => {
        return this.repository.findOneBy({
            id: id
        });
    }
    update = async (id: number, user: User): Promise<User> => {
        user.id = id
        return await this.repository.save(user)
    }


    delete = async (id: number): Promise<void> | null => {
        await this.repository.delete({
            id: id
        });
    }
    findByName= async (user: User): Promise<User> | null => {
        return await this.repository.findOne({
            where: [
                {name: user.name}
            ]
        });
    }

}