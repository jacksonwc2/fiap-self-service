import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ProdutoDTO } from "../../dto/produtoDTO";
import { CategoriaProdutoType } from "../../dto/categoria-produto-type-enum";
import { CadastrarProdutoController } from "../../adapters/controllers/cadastrar-produto-controller";
import { ListarProdutoController } from "../../adapters/controllers/listar-produto-controller";
import { EditarProdutoController } from "../../adapters/controllers/editar-produto-controller";
import { DeletarProdutoController } from "../../adapters/controllers/deletar-produto-controller";
import { BuscarProdutoPorCategoriaController } from "../../adapters/controllers/buscar-produto-por-categoria-controller";

@ApiTags('Produtos')
@Controller('produtos')
export class ProdutoAPIController{

    constructor(
        private readonly cadastrarProdutoController: CadastrarProdutoController,
        private readonly buscarProdutoPorCategoriaController: BuscarProdutoPorCategoriaController,
        private readonly listarProdutoController: ListarProdutoController,
        private readonly editarProdutoController: EditarProdutoController,
        private readonly deletarProdutoController: DeletarProdutoController,
    ){}

    @ApiOperation({
        summary: 'Cadastrar Produto',
        description:
            'Para cadastrar um novo produto é necessário informar os campos obrigatórios nome, descrição, categoria(LANCHE, ACOMPANHAMENTO, BEBIDA ou SOBREMESA) e valor',
    })
    @ApiResponse({ status: 201, description: 'Produto cadastrado com sucesso.' })
    @ApiResponse({ status: 400, description: 'Produto já cadastrado.' })
    @Post()
    async cadastarProduto(@Body() produtoDTO: ProdutoDTO) {
        return await this.cadastrarProdutoController.execute(produtoDTO);
    }

    @ApiOperation({
        summary: 'Listagem de Produtos',
        description: 'Lista contendo todos os produtos cadastrados',
    })
    @ApiResponse({ status: 200, description: 'Produtos listados com sucesso.' })
    @ApiResponse({ status: 400, description: 'Produtos não encontrados.' })
    @Get()
    async listarProdutos(){
        return await this.listarProdutoController.execute();
    }

    @ApiOperation({
        summary: 'Listagem de Produtos por Categoria',
        description: 'Para listar os produtos é necessário informar uma categoria(LANCHE, ACOMPANHAMENTO, BEBIDA ou SOBREMESA)',
    })
    @ApiResponse({ status: 200, description: 'Produto listado com sucesso.' })
    @ApiResponse({ status: 400, description: 'Produto não encontrado.' })
    @Get('/categoria')
    @ApiQuery({name: 'categoria', enum: CategoriaProdutoType})
    async buscarProdutoPorCategoria(@Query('categoria') categoria: CategoriaProdutoType): Promise<ProdutoDTO[]> {
        return await this.buscarProdutoPorCategoriaController.execute(categoria);
    }

    @ApiOperation({
        summary: 'Atualização de Produto',
        description: 'Para atualizar um produto é necessário informar o ID e os novos dados do produto.',
    })
    @ApiResponse({ status: 200, description: 'Produto atualizado com sucesso.' })
    @ApiResponse({ status: 400, description: 'Produto não encontrado.' })
    @Put('/:id')
    async editarProduto(@Param('id') id: string, @Body() produtoDTO: ProdutoDTO){
        return await this.editarProdutoController.execute({id, ...produtoDTO});
    }

    @ApiOperation({
        summary: 'Exclusão de Produto',
        description: 'Para excluir um produto é necessário informar o ID.',
    })
    @ApiResponse({ status: 200, description: 'Produto excluído com sucesso.' })
    @ApiResponse({ status: 400, description: 'Produto não existe na base de dados.' })
    @Delete('/:id')
    async deletarProduto(@Param('id') id: string){
        await this.deletarProdutoController.execute(id);
    }
}