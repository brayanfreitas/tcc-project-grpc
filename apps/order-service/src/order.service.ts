import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  OnModuleInit,
} from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { inventoryGrpcConfig } from './inventory-grpc.config';
import { IGrpcOrder } from './order.interface';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class OrderService implements OnModuleInit {
  @Client(inventoryGrpcConfig)
  private inventoryClient: ClientGrpc;
  private inventoryGrpc: IGrpcOrder;

  onModuleInit() {
    this.inventoryGrpc =
      this.inventoryClient.getService<IGrpcOrder>('InventoryService');
  }

  // async checkStock(productId: number): Promise<boolean> {
  //   try {
  //     const stockQuantity = await lastValueFrom(
  //       this.inventoryGrpc.checkStock({ productId }),
  //     );
  //     if (stockQuantity.quantity > 0) return true;
  //     return false;
  //   } catch (error) {
  //     throw new Error('Error at processing the requisition');
  //   }
  // }

  async updateStock(productId: number, quantity: number): Promise<boolean> {
    try {
      const stock = await lastValueFrom(
        this.inventoryGrpc.checkStock({ productId }),
      );

      if (stock.quantity <= 0) {
        throw new ConflictException('Out of stock');
      }

      await lastValueFrom(
        this.inventoryGrpc.updateStock({ productId, quantity }),
      );

      return true;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error at processing the requisition',
      );
    }
  }
}
