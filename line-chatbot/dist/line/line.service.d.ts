import { HttpService } from "@nestjs/axios";
import * as line from "@line/bot-sdk";
export declare class LineService {
    private readonly httpService;
    private readonly client;
    lineConfig: line.ClientConfig;
    constructor(httpService: HttpService);
    handleLineEvents(body: any): Promise<string>;
    replyTheMessage(message: string, replyToken: string): Promise<void>;
    testService(): line.ClientConfig;
    stickerMessage: {
        type: string;
        packageId: string;
        stickerId: string;
    }[];
    cardMessage: any;
}
