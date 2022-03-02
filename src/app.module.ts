import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresConfig } from './infrastructure/configs/postgres/config';
@Module({
  imports: [TypeOrmModule.forRoot(postgresConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
