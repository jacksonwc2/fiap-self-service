import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ClienteEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string | null;

  @Column({ length: 250 })
  nome: string;

  @Column({ length: 250 })
  email: string;

  @Column()
  cpf: string;

}
