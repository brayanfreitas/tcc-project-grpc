import { Controller, Patch, Query } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Patch()
  async updateStock(
    @Query('productId') productId: number,
    @Query('quantity') quantity: number,
  ): Promise<boolean> {
    console.log(productId, quantity);
    return this.orderService.updateStock(productId, quantity);
  }
}
