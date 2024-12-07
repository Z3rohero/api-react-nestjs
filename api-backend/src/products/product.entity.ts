import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
