/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';
import { LineService } from './line.service';

@Controller('line')
export class LineController {
  constructor(private readonly lineService: LineService) {}

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    return this.lineService.testService();




    
  }
}
