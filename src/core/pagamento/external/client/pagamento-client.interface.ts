import {CriarPagamentoParceiroDTO} from "../../dto/criarPagamentoParceiroDTO";
import {PagamentoParceiroDTO} from "../../dto/pagamentoParceiroDTO";


export abstract class IPagamentoClient {
    abstract gerarPagamentoParceiro(data: CriarPagamentoParceiroDTO): Promise<PagamentoParceiroDTO>
}