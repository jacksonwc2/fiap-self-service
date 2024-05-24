import { OrderStatus } from './enum/orderStatus.enum';
import { ItemPedido } from './itemPedido';

export class Pedido {
    constructor(id:string, idPagamento: string, idCliente: string, valorTotal: number, dataCriacao: Date, status: OrderStatus, combo: ItemPedido[] = []) {
        this.id = id;
        this.idPagamento = idPagamento;
        this.idCliente = idCliente;
        this.valorTotal = valorTotal;
        this.dataCriacao = dataCriacao;
        this.status = status;
        this.combo = combo;
    }

    id: string | null;
    idPagamento: string;
    idCliente: string;
    valorTotal: number;
    dataCriacao: Date;
    status: OrderStatus;
    combo: ItemPedido[];
}