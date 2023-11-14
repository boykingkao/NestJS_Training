import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // enable core for all 
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
