"use strict";
/**
 * @jest-environment jsdom
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
require("@testing-library/jest-dom");
require("reflect-metadata");
const src_1 = require("../src");
const Container_1 = __importStar(require("./Container"));
test('ContainerConsumer provides access to container', () => {
    const Greet = ({ name }) => {
        return <src_1.ContainerConsumer>
      {(container) => {
                return <p>
          {container.get(Container_1.ServiceX).greet(name)}
        </p>;
            }}
    </src_1.ContainerConsumer>;
    };
    (0, react_1.render)(<src_1.ContainerProvider value={Container_1.default}>
    <Greet name='John'/>
  </src_1.ContainerProvider>);
    expect(react_1.screen.getByText(/^Hello/)).toHaveTextContent('Hello John');
});
test('WithContainer provides access to container', () => {
    const Greet = ({ container, name }) => {
        return <p>
      {container.get(Container_1.ServiceX).greet(name)}
    </p>;
    };
    const GreetWithContainer = (0, src_1.WithContainer)(Greet);
    (0, react_1.render)(<src_1.ContainerProvider value={Container_1.default}>
    <GreetWithContainer name='John'/>
  </src_1.ContainerProvider>);
    expect(react_1.screen.getByText(/^Hello/)).toHaveTextContent('Hello John');
});
test('useContainer provides access to container', () => {
    const Greet = ({ name }) => {
        const container = (0, src_1.useContainer)();
        return <p>
      {container.get(Container_1.ServiceX).greet(name)}
    </p>;
    };
    (0, react_1.render)(<src_1.ContainerProvider value={Container_1.default}>
    <Greet name='John'/>
  </src_1.ContainerProvider>);
    expect(react_1.screen.getByText(/^Hello/)).toHaveTextContent('Hello John');
});
test('useService provides access to a service', () => {
    const Greet = ({ name }) => {
        const service = (0, src_1.useService)(Container_1.ServiceX, []);
        return <p>
      {service.greet(name)}
    </p>;
    };
    (0, react_1.render)(<src_1.ContainerProvider value={Container_1.default}>
    <Greet name='John'/>
  </src_1.ContainerProvider>);
    expect(react_1.screen.getByText(/^Hello/)).toHaveTextContent('Hello John');
});
