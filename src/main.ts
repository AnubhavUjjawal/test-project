import { Logger } from 'nestjs-pino';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT ?? 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  // TODO: uncomment for laters
  // app.useLogger(app.get(Logger));
  await app.listen(PORT);
}
bootstrap();
