/*
* Retorno DTA do pagamento de um sistema parceiro externo.
* */

export class PagamentoParceiroDTO {

    id: string;

    creationDate: Date | null;

    externalReference: string;

    amount: number;

    description: string | null;

    qrCode: string;

}
