import { User } from "../entity/User";
export declare class UserRepository {
    private repository;
    constructor();
    findAll: () => Promise<User[]> | null;
    findNameAndPass: (user: User) => Promise<User> | null;
    save: (user: User) => Promise<User> | null;
    findById: (id: number) => Promise<User> | null;
    update: (id: number, user: User) => Promise<User>;
    delete: (id: number) => Promise<void> | null;
    findByName: (user: User) => Promise<User> | null;
}
