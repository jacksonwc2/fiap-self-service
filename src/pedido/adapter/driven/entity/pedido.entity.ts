import { PedidoStatus } from './enum/pedidoStatus.enum';
import { ItemPedidoEntity } from '../entity/itemPedido.entity';
import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class PedidoEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string | null;

    @Column()
    idPagamento: string;

    @Column()
    idCliente: string;

    @Column('decimal')
    valorTotal: number;

    @CreateDateColumn()
    dataCriacao: Date;

    @Column({
        type: 'enum',
        enum: PedidoStatus,
        default: PedidoStatus.PENDING,
      })
      status: PedidoStatus;

    @OneToMany(() => ItemPedidoEntity, itemPedido =>  itemPedido.idPedido)
    itens: ItemPedidoEntity[];
}