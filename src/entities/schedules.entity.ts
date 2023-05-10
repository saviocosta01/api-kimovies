import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./realState.entity";
import { User } from "./users.entity";


@Entity('schedules')

export class Schedule {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    date: string;

    @Column()
    hour: string;

    @ManyToOne(() => RealEstate, (user) => user.schedules)
    @JoinColumn()
    realEstate: RealEstate

    @ManyToOne(() => User, (user) => user.schedules)
    @JoinColumn()
    user: User
}