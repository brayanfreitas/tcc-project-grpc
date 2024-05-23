import { NestFactory } from '@nestjs/core';
import { OrderModule } from './order.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    OrderModule,
    new FastifyAdapter(),
  );
  console.log('Order service is running on port 3002')
  await app.listen(3002);
}
bootstrap();
