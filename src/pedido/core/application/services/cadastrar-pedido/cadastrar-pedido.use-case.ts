import { Pedido } from 'src/pedido/adapter/driven/entity/pedido';
import { CadastrarPedidoDTO } from 'src/pedido/core/domain/cadastrarPedidoDTO';

export interface ICadastrarPedidoUseCase {
    cadastrarPedido(pedidoDTO: CadastrarPedidoDTO): Promise<Pedido>;
}