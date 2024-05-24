import { Pedido } from 'src/pedido/adapter/driven/entity/pedido';
import { CadastrarPedidoDTO } from 'src/pedido/core/domain/cadastrarPedidoDTO';
import { PedidoDTO } from 'src/pedido/core/domain/pedidoDTO';

export abstract class ICadastrarPedidoUseCase {
    abstract cadastrarPedido(pedidoDTO: PedidoDTO): Promise<PedidoDTO>;
}