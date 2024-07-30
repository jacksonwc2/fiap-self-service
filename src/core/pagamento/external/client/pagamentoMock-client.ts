import {CriarPagamentoParceiroDTO} from "../../dto/criarPagamentoParceiroDTO";
import {PagamentoParceiroDTO} from "../../dto/pagamentoParceiroDTO";
import {IPagamentoClient} from "./pagamento-client.interface";
import {v4 as uuidv4} from "uuid";
import * as QRCode from 'qrcode';


export class PagamentoMockClient implements IPagamentoClient{
    /*
    * Método responsável por simular uma requisição a um parceiro de pagamento externo.
    * */

    async gerarPagamentoParceiro(data: CriarPagamentoParceiroDTO): Promise<PagamentoParceiroDTO> {

        return {

            id: uuidv4(),

            creationDate: data.creationDate,

            externalReference: data.externalReference,

            amount: data.amount,

            description: data.description,

            qrCode: await QRCode.toDataURL("Mock QR Code" + data.amount),
        }
    }
}