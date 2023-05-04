import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./realState.entity";
import { User } from "./users.entity";


@Entity('schedules')

export class Schedule {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    date: Date;

    @Column()
    hour: string;

    @ManyToOne(() => RealEstate)
    @JoinColumn()
    realEstate: RealEstate

    @ManyToOne(() => User)
    @JoinColumn()
    user: User
}