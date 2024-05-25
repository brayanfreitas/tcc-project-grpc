import { Controller, Get, Patch, Query } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async test(): Promise<string> {
    return 'Hello from Order Service';
  }

  @Patch()
  async updateStock(
    @Query('productId') productId: number,
    @Query('quantity') quantity: number,
  ): Promise<boolean> {
    console.log(productId, quantity);
    return this.orderService.updateStock(productId, quantity);
  }
}
