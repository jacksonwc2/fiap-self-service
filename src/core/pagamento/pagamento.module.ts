import {forwardRef, Module} from "@nestjs/common";
import {PagamentosAPIController} from "./external/api/pagamento-api.controller";
import {DatabaseModule} from "../../infrastructure/database/database.module";
import {AtualizarStatusIntencaoPagamentoUseCase} from "./use-cases/atualizar-intencao-pagamento-use-case";
import {ConsultarIntencaoPagamentoPorIdUseCase} from "./use-cases/consultar-intencao-pagamento-use-case";
import {ConsultarIntencaoPagamentoPorIdController} from "./adapters/controllers/consultarIntencaoPagamento-controller";
import {AtualizarStatusIntencaoPagamentoController} from "./adapters/controllers/atualizarIntencaoPagamento-controller";
import {IntencaoPagamentoGateway} from "./adapters/gateways/intencaoPagamento-gateway";
import {DataSource} from "typeorm";
import {IntencaoPagamentoEntity} from "./external/repository/intencaoPagamento.entity.document";
import {IIntencaoPagamentoRepository} from "./external/repository/intencaoPagamento-repository.interface";
import {IntencaoRepository} from "./external/repository/intencaoPagamento-repository";
import {CadastrarIntencaoPagamentoUseCase} from "./use-cases/cadastrar-intencao-pagamento-use-case";
import {PedidoModule} from "../pedido/pedido.module";
import {HttpModule} from "@nestjs/axios";
import {IPagamentoClient} from "./external/client/pagamento-client.interface";
import {PagamentoMockClient} from "./external/client/pagamentoMock-client";

@Module({
    providers:[
     // use cases
        AtualizarStatusIntencaoPagamentoUseCase,
        ConsultarIntencaoPagamentoPorIdUseCase,
        CadastrarIntencaoPagamentoUseCase,

     // controllers
        AtualizarStatusIntencaoPagamentoController,
        ConsultarIntencaoPagamentoPorIdController,

     //gateways
        IntencaoPagamentoGateway,

    //clients
        {
            provide: IPagamentoClient,
            useClass: PagamentoMockClient
        },

     //repository
        {
            provide: IIntencaoPagamentoRepository,
            useClass: IntencaoRepository
        },
        {
            provide: "INTENCAO_PAGAMENTO_REPOSITORY",
            useFactory: (datasource: DataSource) =>
                datasource.getRepository(IntencaoPagamentoEntity),
            inject: ["DOCUMENT_DATA_SOURCE"]
        }
    ],
    controllers: [PagamentosAPIController],
    imports:[DatabaseModule, forwardRef(() => PedidoModule), HttpModule],
    exports: [IntencaoPagamentoGateway, CadastrarIntencaoPagamentoUseCase, IPagamentoClient]
})

export class PagamentosModule {}