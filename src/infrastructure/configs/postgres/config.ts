import { get } from 'env-var';
import { config } from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

config();

export const postgresConfig: TypeOrmModuleOptions = {
  name: 'postgres',
  type: 'postgres',
  host: get('POSTGRES_HOST').required().asString(),
  port: get('POSTGRES_PORT').required().asPortNumber(),
  database: get('POSTGRES_DB').required().asString(),
  password: get('POSTGRES_PASSWORD').required().asString(),
  username: get('POSTGRES_USER').required().asString(),
  entities: ['src/**/*.orm-entity.ts'],
  migrationsTableName: 'migrations',
  migrations: ['src/infrastructure/database/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/infrastructure/database/migrations',
  },
  connectTimeoutMS: 10000,
  autoLoadEntities: true,
};
