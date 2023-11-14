import { Injectable } from '@nestjs/common';
import { json } from 'stream/consumers';

@Injectable()
export class LineService {

  lineConfig = {
    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.LINE_CHANNEL_SECRET,
  }

  handleLineEvents(body: any){
    console.log(body);
    console.log(body.events[0].message.text);
    return body
  }

  testService() {
    const DB_Password = process.env.DATABASE_PASSWORD  
    // return `test line service ${DB_Password}`;
    return this.lineConfig
  }
}
