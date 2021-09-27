import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): { data: string } {
    this.logger.warn({ log: "Hello World!" })
    return { data: 'Hello World!' };
  }
}
