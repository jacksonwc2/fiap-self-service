import { IPedidoRepository } from "../../repository/pedido-repository.port";
import { ICadastrarPedidoUseCase } from "./cadastrar-pedido.use-case";
import { Injectable } from "@nestjs/common";
import { CadastrarPedidoDTO } from "src/pedido/core/domain/cadastrarPedidoDTO";
import { PedidoDTO } from "src/pedido/core/domain/pedidoDTO";

@Injectable()
export class CadastrarPedidoUseCase implements ICadastrarPedidoUseCase {
    constructor(private readonly pedidoRepository: IPedidoRepository) {}

    async cadastrarPedido(pedidoDTO: PedidoDTO): Promise<PedidoDTO> {
        return await this.pedidoRepository.salvarPedido(pedidoDTO);
    }
}