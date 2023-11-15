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
} from "@nestjs/common";
import { LineService } from "./line.service";
import { Response } from "express";

@Controller("line")
export class LineController {
  constructor(private readonly lineService: LineService) {}

  @Get()
  getHello(): any {
    // return this.appService.getHello();
    return this.lineService.testService();
  }

  @Post("webhook")
  async handleLineEvents(@Body() body: webhookData, @Res() res: Response) {
    if (body.events.length != 0) {
      const result = await this.lineService.handleLineEvents(body);
    }
    // console.log(body)
    res.status(200).send();
  }

  @Get("test")
  async handleLiff(@Res() res: Response) {
    res.status(200).send("result");
  }
}


interface webhookData{
  destination:string,
  events:any[]
}