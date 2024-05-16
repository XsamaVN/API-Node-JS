import {Blog} from "../entity/Blog";

export interface Service<T> {
    findAll(): Promise<T[]>;

    save(t: T): Promise<T>;

    update(id: number, t: T): Promise<T>;

    findById(id: number): Promise<T>;
    delete(id:number):Promise<void>;
}