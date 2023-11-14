"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
let LineService = class LineService {
    constructor(httpService) {
        this.httpService = httpService;
        this.lineConfig = {
            channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
            channelSecret: process.env.LINE_CHANNEL_SECRET,
        };
        this.cardMessage = [
            {
                type: "flex",
                altText: "This is a Flex Message",
                contents: {
                    type: "bubble",
                    header: {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: "DATS",
                                color: "#FFFFFF",
                            },
                        ],
                        backgroundColor: "#1C1C1C",
                    },
                    body: {
                        type: "box",
                        layout: "vertical",
                        spacing: "md",
                        contents: [
                            {
                                type: "image",
                                url: "https://www.linefriends.com/content/banner/201804/3b5364c97c2d4a26988f85acdc78514e.jpg",
                                size: "full",
                                aspectRatio: "16:9",
                                aspectMode: "cover",
                            },
                            {
                                type: "button",
                                style: "primary",
                                action: {
                                    type: "uri",
                                    label: "CEO Workout",
                                    uri: "https://example.com",
                                },
                            },
                        ],
                    },
                },
            },
        ];
    }
    handleLineEvents(body) {
        if (body.events[0].type === "message") {
            console.log({ message: body.events[0].message.text });
            console.log({ replyToken: body.events[0].replyToken });
            const message = body.events[0].message.text;
            const replyToken = body.events[0].replyToken;
            this.replyMessage(message, replyToken);
        }
        return "test";
    }
    async replyMessage(message, replyToken) {
        let replyMessage = '';
        if (message.toLowerCase() == 'open') {
            replyMessage = this.cardMessage;
        }
        else {
            replyMessage = [
                {
                    type: "text",
                    text: message
                }
            ];
        }
        const dataString = JSON.stringify({
            replyToken: replyToken,
            messages: replyMessage
        });
        const headers = {
            "Content-Type": "application/json",
            Authorization: "Bearer " + process.env.LINE_CHANNEL_ACCESS_TOKEN,
        };
        const webhookOptions = {
            hostname: "api.line.me",
            path: "/v2/bot/message/reply",
            method: "POST",
            headers: headers,
        };
        const broadcastURL = "https://api.line.me/v2/bot/message/broadcast";
        const replyURL = "https://api.line.me/v2/bot/message/reply";
        try {
            const response = await this.httpService
                .post(replyURL, dataString, { headers })
                .toPromise();
            return response.data;
        }
        catch (error) {
            console.error("Error:", error);
            throw error;
        }
    }
    testService() {
        const DB_Password = process.env.DATABASE_PASSWORD;
        console.log("test Service");
        return this.lineConfig;
    }
};
exports.LineService = LineService;
exports.LineService = LineService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], LineService);
//# sourceMappingURL=line.service.js.map