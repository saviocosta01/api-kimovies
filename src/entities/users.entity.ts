import { type } from "os";
import { AfterInsert, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { date } from "zod";
import { Schedule } from "./schedules.entity";

@Entity('users')

export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 45})
    name: string;

    @Column({type: 'varchar', length: 45, unique: true})
    email: string;

    @Column({default: false})
    admin: boolean;

    @Column({type:'varchar', length: 120})
    password: string;

    @CreateDateColumn({type: 'date'})
    createdAt: string;

    @UpdateDateColumn({type: 'date'})
    updatedAt: string ;

    @DeleteDateColumn({type: 'date'})
    deletedAt: string;

    @OneToMany(() => Schedule, (schedule) => schedule.user)
    schedule: Schedule[]

}
