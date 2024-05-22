import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProdutoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'nome', nullable: false, length: 250 })
    nome: string;

    @Column({ name: 'descricao', nullable: false, length: 250 })
    descricao: string;

    @Column({ name: 'categoria', nullable: false, length: 250 })
    categoria: string;

    @Column({ name: 'valor', nullable: false })
    valor: number;
}