import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { IBuscarProdutoPorCategoriaUseCase } from "src/core/produto/core/application/services/buscar-produto-por-categoria/buscar-produto-categoria.use-case";
import { ICadastrarProdutoUseCase } from "src/core/produto/core/application/services/cadastras-produto/cadastrar-produto.use-case";
import { IDeletarProdutoUseCase } from "src/core/produto/core/application/services/deletar-produto/deletar-produto.use-case";
import { IEditarProdutoUseCase } from "src/core/produto/core/application/services/editar-produto/editar-produto.use-case";
import { IListarProdutosUseCase } from "src/core/produto/core/application/services/listar-produtos/listar-produtos.use-case";
import { CategoriaProdutoType } from "src/core/produto/core/domain/categoria-produto-type.enum";
import { Produto } from "src/core/produto/core/domain/produto";

@ApiTags('Produtos')
@Controller('produtos')
export class ProdutoController{

    constructor(
        private readonly cadastrarProdutoUSeCase: ICadastrarProdutoUseCase,
        private readonly buscarProdutoCategoriaUseCase: IBuscarProdutoPorCategoriaUseCase,
        private readonly listarProdutosUseCase: IListarProdutosUseCase,
        private readonly editarProdutoUseCase: IEditarProdutoUseCase,
        private readonly deletarProdutoUseCase: IDeletarProdutoUseCase,
    ){}

    @ApiOperation({
        summary: 'Cadastrar Produto',
        description:
            'Para cadastrar um novo produto é necessário informar os campos obrigatórios nome, descrição, categoria(LANCHE, ACOMPANHAMENTO, BEBIDA ou SOBREMESA) e valor',
    })
    @ApiResponse({ status: 201, description: 'Produto cadastrado com sucesso.' })
    @ApiResponse({ status: 400, description: 'Produto já cadastrado.' })
    @Post()
    async cadastarProduto(@Body() produto: Produto) {
        return await this.cadastrarProdutoUSeCase.cadastrarProduto(produto);
    }

    @ApiOperation({
        summary: 'Listagem de Produtos',
        description: 'Lista contendo todos os produtos cadastrados',
    })
    @ApiResponse({ status: 200, description: 'Produtos listados com sucesso.' })
    @ApiResponse({ status: 400, description: 'Produtos não encontrados.' })
    @Get()
    async listarProdutos(){
        return await this.listarProdutosUseCase.buscarProdutos();
    }

    @ApiOperation({
        summary: 'Listagem de Produtos por Categoria',
        description: 'Para listar os produtos é necessário informar uma categoria(LANCHE, ACOMPANHAMENTO, BEBIDA ou SOBREMESA)',
    })
    @ApiResponse({ status: 200, description: 'Produto listado com sucesso.' })
    @ApiResponse({ status: 400, description: 'Produto não encontrado.' })
    @Get('/:categoria')
    @ApiQuery({name: 'categoria', enum: CategoriaProdutoType})
    async buscarProdutoPorCategoria(@Param('categoria') categoria: CategoriaProdutoType): Promise<Produto[]> {
        return await this.buscarProdutoCategoriaUseCase.buscarProdutoPorCategoria(categoria);
    }

    @ApiOperation({
        summary: 'Atualização de Produto',
        description: 'Para atualizar um produto é necessário informar o ID e os novos dados do produto.',
    })
    @ApiResponse({ status: 200, description: 'Produto atualizado com sucesso.' })
    @ApiResponse({ status: 400, description: 'Produto não encontrado.' })
    @Put('/:id')
    async editarProduto(@Param('id') id: string, @Body() produto: Produto){
        return await this.editarProdutoUseCase.editarProduto({id, ...produto});
    }

    @ApiOperation({
        summary: 'Exclusão de Produto',
        description: 'Para excluir um produto é necessário informar o ID.',
    })
    @ApiResponse({ status: 200, description: 'Produto excluído com sucesso.' })
    @ApiResponse({ status: 400, description: 'Produto não existe na base de dados.' })
    @Delete('/:id')
    async deletarProduto(@Param('id') id: string){
        await this.deletarProdutoUseCase.deletarProduto(id);
    }
}