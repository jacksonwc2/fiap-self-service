import { Pedido } from 'src/pedido/core/domain/pedido';

export abstract class ICadastrarPedidoUseCase {
    abstract cadastrarPedido(pedidoDTO: Pedido): Promise<Pedido>;
}