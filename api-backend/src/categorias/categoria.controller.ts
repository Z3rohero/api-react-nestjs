import { Controller, Get, Put,Post, Body, Param,Delete } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria.entity';

@Controller('categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post()
  create(@Body() categoria:Partial<Categoria> ): Promise<Categoria> {
    return this.categoriaService.create(categoria);
  }
  /*
  @Put(':id')
update(@Param('id') id: number, @Body() categoria: Partial<Categoria>): Promise<Categoria> {
  return this.categoriaService.update(id, categoria);
}
  */


  @Get()
  findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Categoria> {
    return this.categoriaService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.categoriaService.remove(id);
  }

}
