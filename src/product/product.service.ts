import {
  Injectable,
  BadGatewayException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';
import { ProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async GetAll() {
    return await this.productRepository.find();
  }
  async GetById(id: string) {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return product;
  }
  async Add(data: ProductDto) {
    const newProduct = await this.productRepository.create(data);
    await this.productRepository.save(newProduct);
    return newProduct;
  }

  async Update(id: string, data: Partial<ProductDto>) {
    await this.productRepository.update({ id }, data);
    return await this.productRepository.findOne({ id });
  }

  async Delete(id: string) {
    await this.productRepository.delete({ id });
    return { status: 'Deleted succesfully' };
  }
}
