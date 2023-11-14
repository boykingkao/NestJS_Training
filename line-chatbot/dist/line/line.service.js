"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineService = void 0;
const common_1 = require("@nestjs/common");
let LineService = class LineService {
    constructor() {
        this.lineConfig = {
            channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
            channelSecret: process.env.LINE_CHANNEL_SECRET,
        };
    }
    handleLineEvents(body) {
        console.log(body);
        console.log(body.events[0].message.text);
        return body;
    }
    testService() {
        const DB_Password = process.env.DATABASE_PASSWORD;
        return this.lineConfig;
    }
};
exports.LineService = LineService;
exports.LineService = LineService = __decorate([
    (0, common_1.Injectable)()
], LineService);
//# sourceMappingURL=line.service.js.map