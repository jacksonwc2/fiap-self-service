import { Pedido } from 'src/pedido/core/domain/pedido';

export abstract class ICadastrarPedidoUseCase {
    abstract cadastrarPedido(pedido: Pedido): Promise<Pedido>;
}