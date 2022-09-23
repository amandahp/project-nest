import { ProdutosService } from "./produtos.service";
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { Produto } from './produto.model';

@Controller('produtos')
export class ProdutosController {
  // eslint-disable-next-line prettier/prettier
  constructor(private produtosService: ProdutosService) { }

  @Get()
  obterTodos(): Produto[] {
    return this.produtosService.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() params): Produto {
    return this.produtosService.obterUm(params.id);
  }

  @Post()
  criar(@Body() produto: Produto) {
    this.produtosService.criar(produto);
  }

  @Put()
  alterar(@Body() produto: Produto) {
    return this.produtosService.alterar(produto);
  }

  @Delete(':id')
  apagar(@Param() params) {
    return this.produtosService.apagar(params.id);
  }
}
