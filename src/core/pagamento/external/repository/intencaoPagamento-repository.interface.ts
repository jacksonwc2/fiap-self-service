import { AtualizarIntencaoPagamentoDTO } from "../../dto/atualizarIntencaoPagamentoDTO";
import { IntencaoPagamentoEntity } from "./intencaoPagamento.entity.document";

export abstract class IIntencaoPagamentoRepository {
    abstract salvarPagamento(pagamento: IntencaoPagamentoEntity): Promise<IntencaoPagamentoEntity>;
    abstract buscarPorIdPagamento(id: string): Promise<IntencaoPagamentoEntity>;
    abstract atualizarStatusPagamento(id: string, atualizarStatusPedidoDTO: AtualizarIntencaoPagamentoDTO): Promise<IntencaoPagamentoEntity>;
}