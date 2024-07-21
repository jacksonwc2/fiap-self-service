import { CategoriaProdutoType } from "src/core/produto/core/domain/categoria-produto-type.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
