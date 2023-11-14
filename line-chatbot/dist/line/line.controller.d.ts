import { LineService } from './line.service';
import { Response } from "express";
export declare class LineController {
    private readonly lineService;
    constructor(lineService: LineService);
    getHello(): any;
    handleLineEvents(body: any, res: Response): Promise<void>;
}
