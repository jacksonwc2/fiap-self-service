import { Module } from "@nestjs/common";
import { ProdutoEntity } from "src/core/produto/adapter/driven/entity/produto.entity";
import { IProdutoRepository } from "src/core/produto/core/application/repository/produto-repository.port";
import { ProdutoRepositoryAdapter } from "src/core/produto/adapter/driven/produto-repository/produto-repository.adapter";
import { ClienteEntity } from "../cliente/external/repository/cliente.entity";
import { IClienteRepository } from "../cliente/external/repository/cliente-repository.interface";
import { ClienteRepository } from "../cliente/external/repository/cliente-repository";
import { IPedidoRepository } from "./external/repository/pedido-repository.interface";
import { PedidoRepository } from "./external/repository/pedido-repository";
import { CadastrarPedidoUseCase } from "./use-cases/cadastrar-pedido-use-case";
import { ConsultarPedidoPorIdUseCase } from "./use-cases/consultar-pedido-use-case";
import { ListarPedidoUseCase } from "./use-cases/listar-pedido-use-case";
import { AtualizarStatusPedidoUseCase } from "./use-cases/atualizar-status-pedido-use-case";
import { ListarPedidoPorIdClienteUseCase } from "./use-cases/listar-pedido-filtrado-use-case";
import { DataSource } from "typeorm";
import { PedidoEntity } from "./external/repository/pedido.entity";
import { ItemPedidoEntity } from "./external/repository/itemPedido.entity";
import { PedidoAPIController } from "./external/api/pedido-api.controller";
import { DatabaseModule } from "src/infrastructure/database/database.module";
import { CadastrarPedidoController } from "./adapters/controllers/cadastrar-pedido-controller";
import { ConsultarPedidoPorIdController } from "./adapters/controllers/consultar-pedido-controller";
import { ListarPedidoController } from "./adapters/controllers/listar-pedido-controller";
import { AtualizarStatusPedidoController } from "./adapters/controllers/atualizar-status-pedido-controller";
import { ListarPedidoPorIdClienteController } from "./adapters/controllers/listar-pedido-filtrado-controller";
import { ProdutoGateway } from "../produto/adapters/gateways/produto-gateway";
import { ClienteGateway } from "../cliente/adapters/gateways/cliente-gateway";
import { PedidoGateway } from "./adapters/gateways/pedido-gateway";
import { ProdutoModule } from "../produto/produto.module";
import { ClienteModule } from "../cliente/cliente.module";

@Module({
  providers: [
    // use cases
    CadastrarPedidoUseCase,
    ConsultarPedidoPorIdUseCase,
    ListarPedidoUseCase,
    AtualizarStatusPedidoUseCase,
    ListarPedidoPorIdClienteUseCase,

    // controllers
    CadastrarPedidoController,
    ConsultarPedidoPorIdController,
    ListarPedidoController,
    AtualizarStatusPedidoController,
    ListarPedidoPorIdClienteController,

    // gateways
    PedidoGateway,

    //  repository
    {
      provide: IPedidoRepository,
      useClass: PedidoRepository,
    },
    {
      provide: "PEDIDO_REPOSITORY",
      useFactory: (datasource: DataSource) =>
        datasource.getRepository(PedidoEntity),
      inject: ["DATA_SOURCE"],
    },
    {
      provide: "ITEM_PEDIDO_REPOSITORY",
      useFactory: (datasource: DataSource) =>
        datasource.getRepository(ItemPedidoEntity),
      inject: ["DATA_SOURCE"],
    },
  ],
  controllers: [PedidoAPIController],
  imports: [DatabaseModule, ProdutoModule, ClienteModule],
})
export class PedidoModule {}
