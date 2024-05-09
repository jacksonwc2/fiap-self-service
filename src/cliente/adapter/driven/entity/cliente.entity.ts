import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  nome: string;

  @Column({ length: 100 })
  email: string;

  @Column()
  cpf: string;
}
