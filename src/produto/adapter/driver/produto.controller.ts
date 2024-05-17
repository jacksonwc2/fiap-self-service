import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CadastrarProdutoDTO } from "src/produto/core/domain/cadastrarProdutoDTO";

@ApiTags('Produtos')
@Controller('/produtos')
export class ProdutoController{
    cadastrarProdutoUSeCase: any;

    constructor(){}

    @ApiOperation({
        summary: 'Cadastrar Produto',
        description:
          'Para cadastrar um novo produto é necessário informar os campos obrigatórios nome, descrição, categoria e valor',
      })
      @ApiResponse({ status: 201, description: 'Produto cadastrado com sucesso.' })
      @ApiResponse({ status: 400, description: 'Produto já cadastrado.' })
    @Post()
    async cadastarProduto(@Body() produtoDTO: CadastrarProdutoDTO) {
        return await this.cadastrarProdutoUSeCase.cadastrarProduto(produtoDTO);
    }
}