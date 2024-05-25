import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryService } from './inventory.service';
import { Products } from './product.entity';
import { InventoryGrpcController } from './inventory-grpc.controller';
import { Inventory } from './inventory.entity';
import { productsDatabase } from './products-database.provider';
@Module({
  imports: [
    TypeOrmModule.forRoot(productsDatabase.options),
    TypeOrmModule.forFeature([Products, Inventory]),
  ],
  controllers: [InventoryGrpcController],
  providers: [InventoryService],
})
export class InventoryModule {}
