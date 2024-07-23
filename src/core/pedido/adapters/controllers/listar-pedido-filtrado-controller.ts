import { Injectable } from "@nestjs/common";
import { PedidoGateway } from "../gateways/pedido-gateway";
import { ListarPedidoPorIdClienteUseCase } from "../../use-cases/listar-pedido-filtrado-use-case";
import { PedidoDTO } from "../../dto/pedidoDTO";

@Injectable()
export class ListarPedidoPorIdClienteController {
  constructor(
    private readonly pedidoGateway: PedidoGateway,
    private readonly listarPedidoPorIdClienteUseCase: ListarPedidoPorIdClienteUseCase
  ) {}

  async execute(idCliente: string): Promise<PedidoDTO[]> {
    return await this.listarPedidoPorIdClienteUseCase.execute(
      this.pedidoGateway,
      idCliente
    );
  }
}
