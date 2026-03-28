import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Products } from './entities/products.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PartialUpdateProductDto } from './dto/partial-update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepo: Repository<Products>,
  ) {}

  async create(dto: CreateProductDto) {
    const product = this.productsRepo.create(dto);
    const savedProduct = await this.productsRepo.save(product);
    return {
      message: 'Product created successfully',
      data: savedProduct,
    };
  }

  async findAll() {
    const [data, count] = await this.productsRepo.findAndCount({
      order: { createdAt: 'DESC' },
    });
    return {
      message: 'Products retrieved successfully',
      count,
      data,
    };
  }

  async findOne(id: number) {
    const product = await this.productsRepo.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return {
      message: 'Product retrieved successfully',
      data: product,
    };
  }

  async update(id: number, dto: PartialUpdateProductDto) {
    const result = await this.productsRepo.update(id, dto);
    if (result.affected === 0) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    const product = await this.productsRepo.findOne({ where: { id } });
    return {
      message: 'Product updated successfully',
      data: product,
    };
  }

  async replace(id: number, dto: UpdateProductDto) {
    const result = await this.productsRepo.update(id, dto);
    if (result.affected === 0) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    const product = await this.productsRepo.findOne({ where: { id } });
    return {
      message: 'Product replaced successfully',
      data: product,
    };
  }

  async remove(id: number) {
    const result = await this.productsRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return {
      message: 'Product deleted successfully',
      id,
    };
  }

  async findByCategory(category: string) {
    const [data, count] = await this.productsRepo.findAndCount({
      where: { category },
    });
    return {
      message: `Products in category ${category} retrieved successfully`,
      count,
      data,
    };
  }

  async search(keyword: string) {
    const [data, count] = await this.productsRepo.findAndCount({
      where: { name: ILike(`%${keyword}%`) },
    });
    return {
      message: `Products matching keyword "${keyword}" retrieved successfully`,
      count,
      data,
    };
  }

  async toggleActive(id: number) {
    const product = await this.productsRepo.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    product.isActive = !product.isActive;
    const savedProduct = await this.productsRepo.save(product);
    return {
      message: 'Product status toggled successfully',
      data: savedProduct,
    };
  }
}
