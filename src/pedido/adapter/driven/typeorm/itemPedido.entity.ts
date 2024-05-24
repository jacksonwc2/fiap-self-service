import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class ItemPedidoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string | null;

    @Column()
    idPedido: string;

    @Column()
    idProduto: string;

    @Column()
    quantidade: number;   

    @Column('decimal')
    valor: number;   
}