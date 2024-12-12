import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async create(categoria: Partial<Categoria>): Promise<Categoria> {
    const nuevaCategoria = this.categoriaRepository.create(categoria);
    return await this.categoriaRepository.save(nuevaCategoria);
  }

  //no esta activa
  async update(id: number, categoria: Partial<Categoria>): Promise<Categoria> {
    await this.categoriaRepository.update(id, categoria);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.categoriaRepository.delete(id);
  }

  

  findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  findOne(id: number): Promise<Categoria> {
    return this.categoriaRepository.findOne({ where: { id } });
}
}
