import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    const text = process.env
    return text;
  }
}
