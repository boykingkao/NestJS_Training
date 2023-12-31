"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("@nestjs/axios");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const line_controller_1 = require("./line/line.controller");
const line_service_1 = require("./line/line.service");
const line_module_1 = require("./line/line.module");
const configuration_1 = require("./config/configuration");
const lineConfiguration_1 = require("./config/lineConfiguration");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default, lineConfiguration_1.default],
            }),
            axios_1.HttpModule,
            line_module_1.LineModule,
        ],
        controllers: [app_controller_1.AppController, line_controller_1.LineController],
        providers: [app_service_1.AppService, line_service_1.LineService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map