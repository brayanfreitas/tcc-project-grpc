import { Controller } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { GrpcMethod } from '@nestjs/microservices';
import { Inventory } from './inventory.entity';
@Controller('Products')
export class InventoryGrpcController {
  constructor(private readonly inventoryService: InventoryService) {}

  @GrpcMethod('InventoryService', 'checkStock')
  async checkStock(data: { productId: number }): Promise<Inventory> {
    const response = await this.inventoryService.checkStock(data.productId);
    return response;
  }
}
