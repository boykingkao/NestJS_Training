import { LineService } from "./line.service";
import { Response } from "express";
export declare class LineController {
    private readonly lineService;
    constructor(lineService: LineService);
    getHello(): any;
    handleLineEvents(body: webhookData, res: Response): Promise<void>;
    handleLiff(res: Response): Promise<void>;
}
interface webhookData {
    destination: string;
    events: any[];
}
export {};
