import {
  Controller,
  Get,
  Put,
  Delete,
  Post,
  Param,
  Body,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './product.dto';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  Products() {
    return this.productService.GetAll();
  }

  @Get(':id')
  Product(@Param('id') id: string) {
    return this.productService.GetById(id);
  }

  @Post()
  CreateProduct(@Body() data: ProductDto) {
    return this.productService.Add(data);
  }

  @Put(':id')
  UpdateProduct(@Param('id') id: string, data: Partial<ProductDto>) {
    return this.productService.Update(id, data);
  }

  @Delete(':id')
  DeleteProduct(@Param('id') id: string) {
    return this.productService.Delete(id);
  }
}
