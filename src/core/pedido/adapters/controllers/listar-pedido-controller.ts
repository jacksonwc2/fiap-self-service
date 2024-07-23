import { Injectable } from "@nestjs/common";
import { PedidoGateway } from "../gateways/pedido-gateway";
import { ListarPedidoUseCase } from "../../use-cases/listar-pedido-use-case";
import { PedidoDTO } from "../../dto/pedidoDTO";

@Injectable()
export class ListarPedidoController {
  constructor(
    private readonly pedidoGateway: PedidoGateway,
    private readonly listarPedidoUseCase: ListarPedidoUseCase
  ) {}

  async execute(): Promise<PedidoDTO[]> {
    return await this.listarPedidoUseCase.execute(this.pedidoGateway);
  }
}
