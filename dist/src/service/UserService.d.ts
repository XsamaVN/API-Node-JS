import { Service } from "./Service";
import { User } from "../entity/User";
export declare class UserService implements Service<User> {
    private userRepository;
    constructor();
    findAll: () => Promise<User[]>;
    findNameAndPass: (user: User) => Promise<User> | null;
    findByName: (user: User) => Promise<User> | null;
    save: (user: User) => Promise<User>;
    findById: (id: number) => Promise<User> | null;
    update: (id: number, user: User) => Promise<User>;
    delete: (id: number) => Promise<void>;
}
