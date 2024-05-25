import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const inventoryGrpcConfig: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'inventory-service:5000',
    package: 'inventory',
    protoPath: join(__dirname, './inventory.proto'),
  },
};
