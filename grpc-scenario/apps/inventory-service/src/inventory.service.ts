import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './product.entity';
import { Repository } from 'typeorm';
import { Inventory } from './inventory.entity';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private readonly inventoryRepository: Repository<Inventory>,
    @InjectRepository(Products)
    private readonly productRepository: Repository<Products>,
  ) {}

  async checkStock(productId: number): Promise<Inventory> {
    try {
      const product = await this.inventoryRepository.findOne({
        where: {
          product: {
            id: productId,
          },
        },
      });

      if (!product) {
        throw new NotFoundException('Product not found');
      }

      return product;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // updateStock(productId: number, quantity: number): boolean {
  //   const currentStock = this.inventory.get(productId) || 0;
  //   if (currentStock < quantity) {
  //     return false; // Not enough stock
  //   }
  //   this.inventory.set(productId, currentStock - quantity);
  //   return true;
  // }
}
