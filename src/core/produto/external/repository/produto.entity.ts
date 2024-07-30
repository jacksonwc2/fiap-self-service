import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CategoriaProdutoType } from "../../dto/categoria-produto-type-enum";

@Entity()
export class ProdutoEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "nome", nullable: false, length: 250 })
  nome: string;

  @Column({ name: "descricao", nullable: false, length: 250 })
  descricao: string;

  @Column({
    name: "categoria",
    nullable: false,
    type: "enum",
    enum: CategoriaProdutoType,
  })
  categoria: string;

  @Column("decimal", { precision: 5, scale: 2, name: "valor", nullable: false })
  valor: number;
}
