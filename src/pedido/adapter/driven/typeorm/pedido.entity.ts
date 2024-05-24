import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ItemPedidoEntity } from './itemPedido.entity';
import { OrderStatus } from '../entity/enum/orderStatus.enum';

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
        enum: OrderStatus,
        default: OrderStatus.PENDING,
      })
      status: OrderStatus;

    @OneToMany(() => ItemPedidoEntity, itemPedido =>  itemPedido.idPedido)
    combo: ItemPedidoEntity[];
}