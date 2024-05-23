import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ICadastrarProdutoUseCase } from "src/produto/core/application/services/cadastras-produto/cadastrar-produto.use-case";
import { CadastrarProdutoDTO } from "src/produto/core/domain/cadastrarProdutoDTO";
import { EditarProdutoDTO } from "src/produto/core/domain/editarProdutoDTO";
import { ProdutoDTO } from "../../core/domain/produtoDTO";
import { IConsultarProdutoPorCategoriaUseCase } from "../../core/application/services/consultar-produto/consultar-produto-categoria.use-case";
import { ProdutoRepositoryService } from "../driven/produto-repository/produto-repository.service";

@ApiTags('Produtos')
@Controller('produtos')
export class ProdutoController{

    constructor(
        private readonly cadastrarProdutoUSeCase: ICadastrarProdutoUseCase,
        private readonly produtoRepository: ProdutoRepositoryService,
        private readonly consultarProdutoCategoriaUseCase: IConsultarProdutoPorCategoriaUseCase
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
        await this.cadastrarProdutoUSeCase.cadastrarProduto(produtoDTO);
    }

    @ApiOperation({
        summary: 'Listagem de Produtos',
        description: 'Lista contendo todos os produtos cadastrados',
    })
    @ApiResponse({ status: 200, description: 'Produtos listados com sucesso.' })
    @ApiResponse({ status: 400, description: 'Produtos não encontrados.' })
    @Get()
    async listarProdutos(){
        return await this.produtoRepository.listarProdutos();
    }

    @ApiOperation({
        summary: 'Listagem de Produtos por Categoria',
        description: 'Para listar os produtos é necessário informar uma categoria',
    })
    @ApiResponse({ status: 200, description: 'Produto listado com sucesso.' })
    @ApiResponse({ status: 400, description: 'Produto não encontrado.' })
    @Get('/:categoria')
    async buscarProdutoPorCategoria(@Param('categoria') categoria: string): Promise<ProdutoDTO[]> {
        return await this.consultarProdutoCategoriaUseCase.buscarProdutoPorCategoria(categoria);
    }

    @ApiOperation({
        summary: 'Atualização de Produto',
        description: 'Para atualizar um produto é necessário informar o ID. Todos os campos são opcionais.',
    })
    @ApiResponse({ status: 200, description: 'Produto atualizado com sucesso.' })
    @ApiResponse({ status: 400, description: 'Produto não encontrado.' })
    @Put('/:id')
    async editarProduto(@Param('id') id: string, @Body() novosDados: EditarProdutoDTO){
        return await this.produtoRepository.editarProduto(id, novosDados);
    }

    @ApiOperation({
        summary: 'Exclusão de Produto',
        description: 'Para atualizar um produto é necessário informar o ID.',
    })
    @ApiResponse({ status: 200, description: 'Produto excluído com sucesso.' })
    @ApiResponse({ status: 400, description: 'Produto não existe na base de dados.' })
    @Delete('/:id')
    async deletarProduto(@Param('id') id: string){
        await this.produtoRepository.deletarProduto(id);
    }
}