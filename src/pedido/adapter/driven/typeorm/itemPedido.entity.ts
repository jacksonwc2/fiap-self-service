import { Entity, Column } from "typeorm";

@Entity()
export class ItemPedidoEntity {
    @Column()
    idPedido: string;

    @Column()
    idProduto: string;

    @Column()
    quantidade: number;   

    @Column('decimal')
    valor: number;   
}