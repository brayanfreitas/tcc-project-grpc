import { Controller, Get } from '@nestjs/common';
import { InventoryServiceService } from './inventory-service.service';
import { Products } from './product.entity';

@Controller('Products')
export class InventoryServiceController {
  constructor(
    private readonly inventoryServiceService: InventoryServiceService,
  ) {}

  @Get()
  getAll(): Promise<Products[]> {
    return this.inventoryServiceService.getProdutcs();
  }
}
