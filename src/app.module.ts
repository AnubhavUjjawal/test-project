import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as Joi from 'joi';
import { configService } from './config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TerminusModule } from '@nestjs/terminus';
@Module({
  imports: [
    TerminusModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ConfigModule.forRoot({
      cache: true,
      validationSchema: Joi.object({
        // DATABASE_HOST: Joi.string().required(),
        // DATABASE_PORT: Joi.number().default(5432),
        PORT: Joi.number().default(3000)
      })
    }),
    // TODO: Uncomment for later.
    // LoggerModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
