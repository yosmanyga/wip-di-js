"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
class ServiceX {
    greet(name) {
        return `Hello ${name}`;
    }
}
(0, src_1.decorate)((0, src_1.injectable)(), ServiceX);
exports.default = ServiceX;
