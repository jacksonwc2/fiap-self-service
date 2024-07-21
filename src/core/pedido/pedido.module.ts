import { Module } from "@nestjs/common";
import { PedidoEntity } from "./adapter/driven/entity/pedido.entity";
import { PedidoRepository } from "./adapter/driven/pedido-repository/pedido-repository";
import { DataSource } from "typeorm";
import { CadastrarPedidoUseCase } from "./core/application/services/cadastrar-pedido/cadastrar-pedido.service";
import { DatabaseModule } from "src/infrastructure/database/database.module";
import { PedidoController } from "./adapter/driver/pedido.controller";
import { ConsultarPedidoPorIdUseCase } from "./core/application/services/consultar-pedido/consultar-pedido.service";
import { ListarPedidoUseCase } from "./core/application/services/listar-pedidos/listar-pedido.service";
import { AtualizarStatusPedidoUseCase } from "./core/application/services/atualizar-status-pedido/atualizar-status-pedido.service";
import { IPedidoRepository } from "./core/application/repository/pedido-repository.port";
import { ICadastrarPedidoUseCase } from "./core/application/services/cadastrar-pedido/cadastrar-pedido.use-case";
import { IConsultarPedidoPorIdUseCase } from "./core/application/services/consultar-pedido/consultar-pedido.use-case";
import { IListarPedidoUseCase } from "./core/application/services/listar-pedidos/listar-pedido.use-case";
import { IAtualizarStatusPedidoUseCase } from "./core/application/services/atualizar-status-pedido/atualizar-status-pedido.use-case";
import { ItemPedidoEntity } from "./adapter/driven/entity/itemPedido.entity";
import { IListarPedidoPorIdClienteUseCase } from "./core/application/services/listar-pedidos-com-filtro/listar-pedido.filtrado.use-case";
import { ListarPedidoPorIdClienteUseCase } from "./core/application/services/listar-pedidos-com-filtro/listar-pedido-filtrado.service";
import { ClienteModule } from "src/core/cliente/cliente.module";
import { ProdutoModule } from "src/core/produto/produto.module";
import { ProdutoEntity } from "src/core/produto/adapter/driven/entity/produto.entity";
import { IProdutoRepository } from "src/core/produto/core/application/repository/produto-repository.port";
import { ProdutoRepositoryAdapter } from "src/core/produto/adapter/driven/produto-repository/produto-repository.adapter";
import { ClienteEntity } from "../cliente/external/repository/cliente.entity";
import { IClienteRepository } from "../cliente/external/repository/cliente-repository.interface";
import { ClienteRepository } from "../cliente/external/repository/cliente-repository";

@Module({
  providers: [
    {
      provide: IPedidoRepository,
      useClass: PedidoRepository,
    },
    {
      provide: ICadastrarPedidoUseCase,
      useClass: CadastrarPedidoUseCase,
    },
    {
      provide: IConsultarPedidoPorIdUseCase,
      useClass: ConsultarPedidoPorIdUseCase,
    },
    {
      provide: IListarPedidoUseCase,
      useClass: ListarPedidoUseCase,
    },
    {
      provide: IAtualizarStatusPedidoUseCase,
      useClass: AtualizarStatusPedidoUseCase,
    },
    {
      provide: IListarPedidoPorIdClienteUseCase,
      useClass: ListarPedidoPorIdClienteUseCase,
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
      provide: "PRODUTO_REPOSITORY",
      useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(ProdutoEntity),
      inject: ["DATA_SOURCE"],
    },
    {
      provide: "CLIENTE_REPOSITORY",
      useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(ClienteEntity),
      inject: ["DATA_SOURCE"],
    },
    {
      provide: IProdutoRepository,
      useClass: ProdutoRepositoryAdapter,
    },
    {
      provide: IClienteRepository,
      useClass: ClienteRepository,
    },
  ],
  controllers: [PedidoController],
  imports: [DatabaseModule],
})
export class PedidoModule {}
