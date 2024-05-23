export class ItemPedido {
    constructor(idPedido: string, idProduto: string, quantidade: number, valor: number) {
        this.idPedido = idPedido;
        this.idProduto = idProduto;
        this.quantidade = quantidade;
        this.valor = valor;
    }    

    idPedido: string;
    idProduto: string;
    quantidade: number;
    valor: number;
}