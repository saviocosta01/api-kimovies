import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./realState.entity";


@Entity('addresses')

export class Address {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 45})
    street: string;

    @Column({type: 'varchar', length: 8})
    zipCode: string | number;

    @Column({type: 'varchar', length: 7, nullable: true})
    number: string | number;

    @Column({type: 'varchar', length: 20})
    city: string;

    @Column({type: 'varchar', length: 2})
    state: string;

    @OneToOne(() => RealEstate, (realEstate) => realEstate.address)
    realEstate: RealEstate
}
