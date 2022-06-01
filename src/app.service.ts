import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  newfunction(): string {
    return 'This is a new function';
  }
}
