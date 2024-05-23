import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ICadastrarProdutoUseCase } from "src/produto/core/application/services/cadastras-produto/cadastrar-produto.use-case";
import { CadastrarProdutoDTO } from "src/produto/core/domain/cadastrarProdutoDTO";
import { ProdutoRepositoryService } from "../driven/produto-repository/produto-repository.service";
import { EditarProdutoDTO } from "src/produto/core/domain/editarProdutoDTO";
import { ProdutoDTO } from "../../core/domain/produtoDTO";

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
    @ApiOperation({
        summary: 'Buscar Produtos por Categoria',
        description: 'Lista todos os Produtos de determinada Categoria.'
    })
    @ApiResponse({status: 200, description: 'Produtos listados com sucesso.'})
    async buscarProdutoPorCategoria(@Param('categoria') categoria: string): Promise<ProdutoDTO[]> {
        return await this.produtoRepository.listarProdutosCategoria(categoria);
    }

    @Put('/:id')
    async editarProduto(@Param('id') id: string, @Body() novosDados: EditarProdutoDTO){
        const produtoAtualizado = await this.produtoRepository.editarProduto(id, novosDados);

        return {
            produto: produtoAtualizado,
            message: 'Produto atualizado com sucesso.'
        }
    }

    @Delete('/:id')
    async deletarProduto(@Param('id') id: string){
        await this.produtoRepository.deletarProduto(id);
        return{
            message: 'Produto excluído com sucesso.'
        }
    }
}