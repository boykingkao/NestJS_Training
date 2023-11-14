export declare class LineService {
    lineConfig: {
        channelAccessToken: string;
        channelSecret: string;
    };
    handleLineEvents(body: any): any;
    testService(): {
        channelAccessToken: string;
        channelSecret: string;
    };
}
