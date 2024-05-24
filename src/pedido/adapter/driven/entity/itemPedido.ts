export class ItemPedido {
    constructor(id: string, idPedido: string, idProduto: string, quantidade: number, valor: number) {
        this.id = id;
        this.idPedido = idPedido;
        this.idProduto = idProduto;
        this.quantidade = quantidade;
        this.valor = valor;
    }    
    id: string | null;
    idPedido: string;
    idProduto: string;
    quantidade: number;
    valor: number;
}