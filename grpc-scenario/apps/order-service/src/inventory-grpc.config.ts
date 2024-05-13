import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const inventoryGrpcConfig: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:50030',
    package: 'inventory',
    protoPath: join(__dirname, './inventory.proto'),
  },
};
