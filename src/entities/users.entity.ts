import { type } from "os";
import { AfterInsert, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { date } from "zod";
import { Schedule } from "./schedules.entity";
import { getRounds, hashSync } from "bcryptjs";

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

    @DeleteDateColumn({type: 'date', nullable: true})
    deletedAt: string;

    @OneToMany(() => Schedule, (schedule) => schedule.user)
    schedules: Schedule[]

    @BeforeInsert() 
    @BeforeUpdate()
    hashPassword() { // Função simples

   // getRounds validando se a senha já não foi criptografada antes devido ao update
   const isEncrypted: number = getRounds(this.password); 

   if (!isEncrypted) {
      // Adicionando ao objeto que irá para o banco a senha criptografada
      this.password = hashSync(this.password, 10);
   }
}

}
