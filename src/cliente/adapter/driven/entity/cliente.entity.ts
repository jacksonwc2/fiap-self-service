import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {

  @PrimaryGeneratedColumn()
  id: number | null;

  @Column({ length: 250 })
  nome: string;

  @Column({ length: 250 })
  email: string;

  @Column()
  cpf: string;

}
