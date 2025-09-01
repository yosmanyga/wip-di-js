"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadModules = exports.unmanaged = exports.decorate = exports.injectable = exports.inject = exports.ContainerModule = exports.Container = void 0;
const inversify_1 = require("inversify");
Object.defineProperty(exports, "Container", { enumerable: true, get: function () { return inversify_1.Container; } });
Object.defineProperty(exports, "ContainerModule", { enumerable: true, get: function () { return inversify_1.ContainerModule; } });
Object.defineProperty(exports, "decorate", { enumerable: true, get: function () { return inversify_1.decorate; } });
Object.defineProperty(exports, "inject", { enumerable: true, get: function () { return inversify_1.inject; } });
Object.defineProperty(exports, "injectable", { enumerable: true, get: function () { return inversify_1.injectable; } });
Object.defineProperty(exports, "unmanaged", { enumerable: true, get: function () { return inversify_1.unmanaged; } });
const loadModules = (container, module) => {
    if (!Array.isArray(module)) {
        module = [module];
    }
    module.forEach(module => container.load(module));
};
exports.loadModules = loadModules;
