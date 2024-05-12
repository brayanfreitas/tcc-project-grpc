import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryServiceController } from './inventory-service.controller';
import { InventoryServiceService } from './inventory-service.service';
import { productsDatabase } from './products-database.provider';
import { Products } from './product.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot(productsDatabase.options),
    TypeOrmModule.forFeature([Products]),
  ],
  controllers: [InventoryServiceController],
  providers: [InventoryServiceService],
})
export class InventoryServiceModule {}
