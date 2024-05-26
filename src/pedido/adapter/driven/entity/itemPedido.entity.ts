import { PedidoEntity } from "../entity/pedido.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";

@Entity()
export class ItemPedidoEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string | null;

  @Column()
  @JoinColumn({ name: "idPedido" })
  @ManyToOne(() => PedidoEntity, (pedido) => pedido.combo)
  idPedido: string;

  @Column()
  idProduto: string;

  @Column()
  quantidade: number;

  @Column("decimal", { precision: 5, scale: 2, name: "valor", nullable: false })
  valor: number;
}
