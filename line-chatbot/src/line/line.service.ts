import { Injectable } from '@nestjs/common';
import { json } from 'stream/consumers';

@Injectable()
export class LineService {
  testService() {
    const DB_Password = process.env.DATABASE_PASSWORD  
    return `test line service ${DB_Password}`;
  }
}
