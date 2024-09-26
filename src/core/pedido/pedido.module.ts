import {forwardRef, Module} from "@nestjs/common";
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
import { PedidoGateway } from "./adapters/gateways/pedido-gateway";
import { ProdutoModule } from "../produto/produto.module";
import { ClienteModule } from "../cliente/cliente.module";
import {PagamentosModule} from "../pagamento/pagamento.module";
import {DynamoDB} from "aws-sdk";
import {IPedidoCacheRepository} from "./external/repository/pedido-cache-repository.interface";
import {PedidoCacheRepository} from "./external/repository/pedido-cache-repository";
import {ListarPedidosAtivosController} from "./adapters/controllers/listar-pedidos-ativos-controller";
import {ListarPedidosAtivosUseCase} from "./use-cases/listar-pedidos-ativos-use-case";

@Module({
  providers: [
    // use cases
    CadastrarPedidoUseCase,
    ConsultarPedidoPorIdUseCase,
    ListarPedidoUseCase,
    AtualizarStatusPedidoUseCase,
    ListarPedidoPorIdClienteUseCase,
    ListarPedidosAtivosUseCase,

    // controllers
    CadastrarPedidoController,
    ConsultarPedidoPorIdController,
    ListarPedidoController,
    AtualizarStatusPedidoController,
    ListarPedidoPorIdClienteController,
    ListarPedidosAtivosController,

    // gateways
    PedidoGateway,

    //  repository
    {
      provide: IPedidoRepository,
      useClass: PedidoRepository,
    },
    {
      provide: IPedidoCacheRepository,
      useClass: PedidoCacheRepository,
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
    {
      provide: "PEDIDO_CACHE_REPOSITORY",
      useFactory: (source: DynamoDB.DocumentClient) =>
        source,
      inject: ["CACHE_DATA_SOURCE"],
    },
  ],
  controllers: [PedidoAPIController],
  exports: [PedidoGateway],
  imports: [DatabaseModule, ProdutoModule, ClienteModule, forwardRef(()=>PagamentosModule)],
})
export class PedidoModule {}
