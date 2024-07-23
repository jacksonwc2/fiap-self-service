import { PedidoStatusType } from "../../entities/pedido-status-type.enum";
import { ItemPedidoEntity } from "./itemPedido.entity";
import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";

@Entity()
export class PedidoEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string | null;

  @Column()
  idPagamento: string;

  @Column()
  idCliente: string | null;

  @Column("decimal", { precision: 5, scale: 2, name: "valor", nullable: false })
  valorTotal: number;

  @CreateDateColumn()
  dataCriacao: Date;

  @Column({
    name: "status",
    nullable: false,
    type: "enum",
    enum: PedidoStatusType,
  })
  status: string;

  @OneToMany(() => ItemPedidoEntity, (itemPedido) => itemPedido.idPedido)
  combo: ItemPedidoEntity[];
}
