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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineController = void 0;
const common_1 = require("@nestjs/common");
const line_service_1 = require("./line.service");
let LineController = class LineController {
    constructor(lineService) {
        this.lineService = lineService;
    }
    getHello() {
        return this.lineService.testService();
    }
    async handleLineEvents(body, res) {
        const result = await this.lineService.handleLineEvents(body);
        res.status(200).send('ok');
    }
    async handleLiff(res) {
        res.status(200).send('result');
    }
};
exports.LineController = LineController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], LineController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('webhook'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], LineController.prototype, "handleLineEvents", null);
__decorate([
    (0, common_1.Get)('test'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LineController.prototype, "handleLiff", null);
exports.LineController = LineController = __decorate([
    (0, common_1.Controller)('line'),
    __metadata("design:paramtypes", [line_service_1.LineService])
], LineController);
//# sourceMappingURL=line.controller.js.map