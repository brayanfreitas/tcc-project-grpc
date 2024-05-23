import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryService } from './inventory.service';
import { Products } from './product.entity';
import { InventoryGrpcController } from './inventory-grpc.controller';
import { Inventory } from './inventory.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'tcc-db',
      entities: [Products, Inventory],
    }),
    TypeOrmModule.forFeature([Products, Inventory]),
  ],
  controllers: [InventoryGrpcController],
  providers: [InventoryService],
})
export class InventoryModule {}
