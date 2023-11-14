/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Res,
} from "@nestjs/common";import { LineService } from './line.service';
import { Response } from "express";


@Controller('line')
export class LineController {
  constructor(private readonly lineService: LineService) {}

  @Get()
  getHello(): any {
    // return this.appService.getHello();
    return this.lineService.testService();
  }


  @Post('webhook')
  async handleLineEvents(@Body() body:any ,@Res() res: Response) {

    const result = await this.lineService.handleLineEvents(body);
    res.status(200).send('ok');


  }


  @Get('test')
  async handleLiff(@Res() res: Response) {


    res.status(200).send('result');


  }

  
}
