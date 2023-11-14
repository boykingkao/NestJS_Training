import { HttpService } from "@nestjs/axios";
export declare class LineService {
    private readonly httpService;
    lineConfig: {
        channelAccessToken: string;
        channelSecret: string;
        liffId: string;
        liffUrl: string;
    };
    constructor(httpService: HttpService);
    handleLineEvents(body: any): string;
    replyMessage(message: string, replyToken: string): Promise<any>;
    testService(): {
        channelAccessToken: string;
        channelSecret: string;
        liffId: string;
        liffUrl: string;
    };
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
