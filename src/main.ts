import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const instance = express();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
