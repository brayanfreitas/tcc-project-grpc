import { NestFactory } from '@nestjs/core';
import { InventoryServiceModule } from './inventory-service.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { MicroserviceOptions } from '@nestjs/microservices/interfaces/microservice-configuration.interface';
import { Transport } from '@nestjs/microservices/enums';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    InventoryServiceModule,
    new FastifyAdapter(),
  );
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'inventory',
      protoPath: join(__dirname, 'inventory.proto'),
      url: process.env.GRPC_HOST || '127.0.0.1:50031',
    },
  });
  await app.listen(3000);
}
bootstrap();
