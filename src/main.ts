import { Logger } from 'nestjs-pino';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT ?? 3000

async function bootstrap() {
  // TODO: uncomment for laters
  // const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(Logger));
  await app.listen(PORT);
}
bootstrap();
