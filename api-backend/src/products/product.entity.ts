import { Entity, Column,ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from '../categorias/categoria.entity'
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;
  
  @Column()
  categoria: string;
  
  @Column('decimal')
  precio: number;

  @Column('int')
  cantidad: number;

  @Column({ nullable: true })
  fileUrl: string;

  @ManyToOne(() => Categoria, (categoria) => categoria.productos)
  categoriaRel: Categoria; 
}
