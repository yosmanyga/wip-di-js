"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceX = void 0;
const src_1 = require("../src");
const ServiceX_1 = __importDefault(require("./ServiceX"));
exports.ServiceX = ServiceX_1.default;
const container = new src_1.Container();
(0, src_1.loadModules)(container, [
    new src_1.ContainerModule((bind) => {
        bind(ServiceX_1.default).to(ServiceX_1.default);
    })
]);
exports.default = container;
