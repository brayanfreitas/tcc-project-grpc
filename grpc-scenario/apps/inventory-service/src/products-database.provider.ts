import { join } from 'path';
import { DataSource } from 'typeorm';
import { Products } from './product.entity';

export const productsDatabase = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'postgres',
  database: 'products',
  entities: [Products],
  migrations: [join(__dirname, 'migrations', '*{.ts,.js}')],
});
