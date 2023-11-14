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
    cardMessage: {
        type: string;
        altText: string;
        contents: {
            type: string;
            header: {
                type: string;
                layout: string;
                contents: {
                    type: string;
                    text: string;
                    color: string;
                }[];
                backgroundColor: string;
            };
            body: {
                type: string;
                layout: string;
                spacing: string;
                contents: ({
                    type: string;
                    url: string;
                    size: string;
                    aspectRatio: string;
                    aspectMode: string;
                    style?: undefined;
                    action?: undefined;
                } | {
                    type: string;
                    style: string;
                    action: {
                        type: string;
                        label: string;
                        uri: string;
                    };
                    url?: undefined;
                    size?: undefined;
                    aspectRatio?: undefined;
                    aspectMode?: undefined;
                })[];
            };
        };
    }[];
}
