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
  await app.listen(3001);
}
bootstrap();
