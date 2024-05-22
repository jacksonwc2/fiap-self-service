import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ICadastrarProdutoUseCase } from "src/produto/core/application/services/cadastras-produto/cadastrar-produto.use-case";
import { CadastrarProdutoDTO } from "src/produto/core/domain/cadastrarProdutoDTO";
import { ProdutoRepositoryService } from "../driven/produto-repository/produto-repository.service";

@ApiTags('Produtos')
@Controller('produtos')
export class ProdutoController{

    constructor(
        private readonly cadastrarProdutoUSeCase: ICadastrarProdutoUseCase,
        private readonly produtoRepository: ProdutoRepositoryService,

    ){}

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

    @Get()
    async listarProdutos(){
        return await this.produtoRepository.listarProdutos();
    }

    @Get('/:categoria')
    async buscarProdutoPorCategoria(@Param('categoria') categoria: string){
        return await this.produtoRepository.listarProdutosCategoria(categoria);
    }
}