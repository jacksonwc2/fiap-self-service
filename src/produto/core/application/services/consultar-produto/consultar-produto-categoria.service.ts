import {Injectable} from "@nestjs/common";
import {IConsultarProdutoPorCategoriaUseCase} from "./consultar-produto-categoria.use-case";
import {IProdutoRepository} from "../../repository/produto-repository.port";
import {ProdutoDTO} from "../../../domain/produtoDTO";

@Injectable()
export class ConsultarProdutoPorCategoriaService implements IConsultarProdutoPorCategoriaUseCase {

    constructor(private readonly produtoRepository: IProdutoRepository) {}

    async buscarProdutoPorCategoria(categoria:string): Promise<ProdutoDTO[]> {
        return await this.produtoRepository.buscarProdutoPorCategoria(categoria);
    }
}