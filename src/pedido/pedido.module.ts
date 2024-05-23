import { Module } from "@nestjs/common";
import { PedidoEntity } from "./adapter/driven/typeorm/pedido.entity";
import { ItemPedidoEntity } from "./adapter/driven/typeorm/itemPedido.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PedidoRepository } from "./adapter/driven/pedido-repository/pedido-repository";
import { DataSource } from "typeorm";
import { CadastrarPedidoUseCase } from "./core/application/services/cadastrar-pedido/cadastrar-pedido.service";
import { DatabaseModule } from "src/database/database.module";
import { PedidoController } from "./adapter/driver/pedido.controller";
import { ConsultarPedidoPorIdUseCase } from "./core/application/services/consultar-pedido/consultar-pedido.service";
import { ListarPedidoUseCase } from "./core/application/services/listar-pedidos/listar-pedido.service";
import { AtualizarStatusPedidoUseCase } from "./core/application/services/atualizar-status-pedido/atualizar-status-pedido.service";

@Module({
    imports: [TypeOrmModule.forFeature([PedidoEntity, ItemPedidoEntity]), DatabaseModule],
    providers: [
        {
            provide: 'IPedidoRepository',
            useClass: PedidoRepository,
        },
        {
            provide: 'ICadastrarPedidoService',
            useClass: CadastrarPedidoUseCase,
        },
        {
            provide: 'IConsultarPedidoPorIdUseCase',
            useClass: ConsultarPedidoPorIdUseCase
        },
        {
            provide: 'IListarPedidoUseCase',
            useClass: ListarPedidoUseCase
        },
        {
            provide: 'IAtualizarStatusPedidoUseCase',
            useClass: AtualizarStatusPedidoUseCase
        },
        {
            provide: 'PEDIDO_REPOSITORY',
            useFactory: (datasource: DataSource) => datasource.getRepository(PedidoEntity),
            inject: ['DATA_SOURCE'],
        }
    ],
    controllers: [PedidoController],
    exports: ['CadastrarPedidoUseCase', 'ConsultarPedidoPorIdUseCase', 'ListarPedidoUseCase', 'AtualizarStatusPedidoUseCase']
})
export class PedidoModule {}