import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InventoryServiceService {
  constructor(
    @InjectRepository(Products)
    private readonly productRepository: Repository<Products>,
  ) {}
  async getProdutcs(): Promise<Products[]> {
    try {
      return await this.productRepository.find();
    } catch (e) {
      console.log(e);
    }
  }
}
