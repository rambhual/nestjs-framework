import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column({ length: 500 }) name: string;

  @Column('text') description: string;

  @Column() price: number;

  @Column() isPublished: boolean;
}
