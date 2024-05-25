import { Injectable } from "@nestjs/common";
import { Pedido } from "src/pedido/core/domain/pedido";
import { ICadastrarPedidoUseCase } from "./cadastrar-pedido.use-case";
import { IPedidoRepository } from "../../repository/pedido-repository.port";

@Injectable()
export class CadastrarPedidoUseCase implements ICadastrarPedidoUseCase {
    constructor(private readonly pedidoRepository: IPedidoRepository) {}

    async cadastrarPedido(pedidoDTO: Pedido): Promise<Pedido> {
        return await this.pedidoRepository.salvarPedido(pedidoDTO);
    }
}