import { NestFactory } from '@nestjs/core';
import { InventoryModule } from './inventory.module';
import { MicroserviceOptions } from '@nestjs/microservices/interfaces/microservice-configuration.interface';
import { Transport } from '@nestjs/microservices/enums';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    InventoryModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'inventory',
        protoPath: join(__dirname, 'inventory.proto'),
      },
    },
  );

  await app.listen();
}
bootstrap();
