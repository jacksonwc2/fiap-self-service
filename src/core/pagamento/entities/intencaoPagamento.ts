import { IntencaoPagamentoStatusType } from "./intencaoPagamentoStatus-type.enum";

export class IntencaoPagamento {
    id: string | null;

    dataCriacao: Date;

    dataFinalizacao: Date | null;

    status: string;

    constructor() {
        this.status = IntencaoPagamentoStatusType.EM_ANALISE;
        this.dataCriacao = new Date();
        this.dataFinalizacao = null;
    }
}