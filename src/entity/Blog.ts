import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";

@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    title: string
    @ManyToOne(() => User, (user) => user.blogs)
    user: User;

}