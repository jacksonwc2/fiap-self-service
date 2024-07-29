/*
* DTO para criação de um pagamento utilizando um sistema parceiro externo.
* */

export class CriarPagamentoParceiroDTO {

    creationDate: Date | null;

    externalReference: string;

    amount: number;

    description: string | null;

}
