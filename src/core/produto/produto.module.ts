import { Module } from "@nestjs/common";
import { ICadastrarProdutoUseCase } from "./core/application/services/cadastras-produto/cadastrar-produto.use-case";
import { CadastrarProdutoService } from "./core/application/services/cadastras-produto/cadastrar-produto.service";
import { IProdutoRepository } from "./core/application/repository/produto-repository.port";
import { ProdutoRepositoryAdapter } from "./adapter/driven/produto-repository/produto-repository.adapter";
import { DataSource } from "typeorm";
import { ProdutoController } from "./adapter/driver/produto.controller";
import { DatabaseModule } from "src/infrastructure/database/database.module";
import { ProdutoEntity } from "./adapter/driven/entity/produto.entity";
import { IBuscarProdutoPorCategoriaUseCase } from "./core/application/services/buscar-produto-por-categoria/buscar-produto-categoria.use-case";
import { BuscarProdutoPorCategoriaService } from "./core/application/services/buscar-produto-por-categoria/buscar-produto-categoria.service";
import { IListarProdutosUseCase } from "./core/application/services/listar-produtos/listar-produtos.use-case";
import { ListarProdutosService } from "./core/application/services/listar-produtos/listar-produtos.service";
import { IEditarProdutoUseCase } from "./core/application/services/editar-produto/editar-produto.use-case";
import { EditarProdutoService } from "./core/application/services/editar-produto/editar-produto.service";
import { IDeletarProdutoUseCase } from "./core/application/services/deletar-produto/deletar-produto.use-case";
import { DeletarProdutoService } from "./core/application/services/deletar-produto/deletar-produto.service";

@Module({
  providers: [
    {
      provide: ICadastrarProdutoUseCase,
      useClass: CadastrarProdutoService,
    },
    {
      provide: IProdutoRepository,
      useClass: ProdutoRepositoryAdapter,
    },
    {
      provide: IBuscarProdutoPorCategoriaUseCase,
      useClass: BuscarProdutoPorCategoriaService,
    },
    {
      provide: IListarProdutosUseCase,
      useClass: ListarProdutosService,
    },
    {
      provide: IEditarProdutoUseCase,
      useClass: EditarProdutoService,
    },
    {
      provide: IDeletarProdutoUseCase,
      useClass: DeletarProdutoService,
    },
    {
      provide: "PRODUTO_REPOSITORY",
      useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(ProdutoEntity),
      inject: ["DATA_SOURCE"],
    },
  ],
  controllers: [ProdutoController],
  imports: [DatabaseModule],
})
export class ProdutoModule {}
