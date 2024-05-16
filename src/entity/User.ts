import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Blog} from "./Blog";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    password: string
    @OneToMany(() => Blog, (blog) => blog.user)
    blogs: Blog[];
}