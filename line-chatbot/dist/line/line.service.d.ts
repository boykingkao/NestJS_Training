import { HttpService } from "@nestjs/axios";
export declare class LineService {
    private readonly httpService;
    lineConfig: {
        channelAccessToken: string;
        channelSecret: string;
    };
    constructor(httpService: HttpService);
    handleLineEvents(body: any): string;
    replyMessage(message: string, replyToken: string): Promise<any>;
    testService(): {
        channelAccessToken: string;
        channelSecret: string;
    };
}
