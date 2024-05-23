import { ProdutoEntity } from "src/produto/adapter/driven/entity/produto.entity";

export abstract class IConsultarProdutoPorNome {
    abstract buscarPodutoPorNome(nome: string);
}