import { Injectable } from "@nestjs/common";
import { ClienteGateway } from "src/core/cliente/adapters/gateways/cliente-gateway";
import { ProdutoGateway } from "src/core/produto/adapters/gateways/produto-gateway";
import { PedidoGateway } from "../gateways/pedido-gateway";
import { CadastrarPedidoUseCase } from "../../use-cases/cadastrar-pedido-use-case";
import { PedidoDTO } from "../../dto/pedidoDTO";

@Injectable()
export class CadastrarPedidoController {
  constructor(
    private readonly pedidoGateway: PedidoGateway,
    private readonly clienteGateway: ClienteGateway,
    private readonly produtoGateway: ProdutoGateway,
    private readonly cadastrarPedidoUseCase: CadastrarPedidoUseCase
  ) {}

  async execute(pedido: PedidoDTO): Promise<PedidoDTO> {
    const novoPedido = await this.cadastrarPedidoUseCase.execute(
      this.clienteGateway,
      this.produtoGateway,
      this.pedidoGateway,
      pedido
    );

    const adapterPresenter: PedidoDTO = { ...novoPedido };

    return adapterPresenter;
  }
}
