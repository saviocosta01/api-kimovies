import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./addresses.entity";
import { Category } from "./categories.entity";
import { Schedule } from "./schedules.entity";


@Entity('real_estate')

export class RealEstate {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({default: false})
    sold: boolean;

    @Column({default: 0})
    value: number;

    @Column({type: "integer"})
    size: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category)
    category: Category

    @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
    schedule: Schedule[]
}