import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as Joi from 'joi';
@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      validationSchema: Joi.object({
        // DATABASE_HOST: Joi.string().required(),
        // DATABASE_PORT: Joi.number().default(5432),
        PORT: Joi.number().default(3000)
      })
    }),
    LoggerModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
