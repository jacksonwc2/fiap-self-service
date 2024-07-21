import { Pedido } from 'src/core/pedido/core/domain/pedido';

export abstract class ICadastrarPedidoUseCase {
    abstract cadastrarPedido(pedido: Pedido): Promise<Pedido>;
}