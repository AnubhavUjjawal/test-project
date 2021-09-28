import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

require('dotenv').config();

class ConfigService {

  constructor(private env: { [k: string]: string | undefined }) { }

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach(k => this.getValue(k, true));
    return this;
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',

      host: this.getValue('DATABASE_HOST'),
      port: parseInt(this.getValue('DATABASE_PORT')),
      username: this.getValue('DATABASE_USER'),
      password: this.getValue('DATABASE_PASSWORD'),
      database: this.getValue('DATABASE_NAME'),
      // logging: true,

      // entities: ['**/*.entity.{ts,js}'],

      // migrationsTableName: 'migration',

      // migrations: ['src/migration/*.ts'],

      // seeds: ['src/database/seeds/**/*.ts'],
      // factories: ['src/database/factories/**/*.ts'],

      entities: ['dist/**/*.entity.{ts,js}'],

      migrationsTableName: 'migration',

      migrations: ['dist/migration/*.js'],

      seeds: ['dist/database/seeds/**/*.js'],
      factories: ['dist/database/factories/**/*.js'],

      cli: {
        migrationsDir: 'src/migration',
      },

    } as TypeOrmModuleOptions;
  }

}

const configService = new ConfigService(process.env)
  .ensureValues([
    'DATABASE_HOST',
    'DATABASE_PORT',
    'DATABASE_USER',
    'DATABASE_PASSWORD',
    'DATABASE_NAME'
  ]);

export { configService };
