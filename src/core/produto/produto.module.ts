import { Module } from "@nestjs/common";
import { CadastrarProdutoUseCase } from "./use-cases/cadastrar-produto-use-case";
import { ProdutoRepository } from "./external/repository/produto-repository";
import { ProdutoGateway } from "./adapters/gateways/produto-gateway";
import { BuscarProdutoPorCategoriaUseCase } from "./use-cases/buscar-produto-por-categoria-use-case";
import { ListarProdutoUseCase } from "./use-cases/listar-produto-use-case";
import { EditarProdutoUseCase } from "./use-cases/editar-produto-use-case";
import { DeletarProdutoUseCase } from "./use-cases/deletar-produto-use-case";
import { DataSource } from "typeorm";
import { ProdutoEntity } from "./external/repository/produto.entity";
import { ProdutoAPIController } from "./external/api/produto-api.controller";
import { DatabaseModule } from "src/infrastructure/database/database.module";
import { IProdutoRepository } from "./external/repository/produto-repository-interface";
import { CadastrarProdutoController } from "./adapters/controllers/cadastrar-produto-controller";
import { BuscarProdutoPorCategoriaController } from "./adapters/controllers/buscar-produto-por-categoria-controller";
import { ListarProdutoController } from "./adapters/controllers/listar-produto-controller";
import { EditarProdutoController } from "./adapters/controllers/editar-produto-controller";
import { DeletarProdutoController } from "./adapters/controllers/deletar-produto-controller";

@Module({
  providers: [
    //gateway
    ProdutoGateway,

    // use case
    CadastrarProdutoUseCase,
    BuscarProdutoPorCategoriaUseCase,
    ListarProdutoUseCase,
    EditarProdutoUseCase,
    DeletarProdutoUseCase,

    // controllers
    CadastrarProdutoController,
    BuscarProdutoPorCategoriaController,
    ListarProdutoController,
    EditarProdutoController,
    DeletarProdutoController,

    // external repository
    {
      provide: IProdutoRepository,
      useClass: ProdutoRepository,
    },
    {
      provide: "PRODUTO_REPOSITORY",
      useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(ProdutoEntity),
      inject: ["DATA_SOURCE"],
    },
  ],
  controllers: [ProdutoAPIController],
  imports: [DatabaseModule],
  exports: [ProdutoGateway]
})
export class ProdutoModule {}
