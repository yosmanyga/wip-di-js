"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useService = exports.useContainer = exports.WithContainer = exports.ContainerConsumer = exports.ContainerProvider = void 0;
const react_1 = require("react");
const ContainerContext = (0, react_1.createContext)(null);
const ContainerProvider = ({ value, children }) => {
    return <ContainerContext.Provider value={value}>
    {children}
  </ContainerContext.Provider>;
};
exports.ContainerProvider = ContainerProvider;
const ContainerConsumer = ({ children }) => {
    return <ContainerContext.Consumer>
    {(container) => {
            if (!container || !children) {
                return null;
            }
            return children(container);
        }}
  </ContainerContext.Consumer>;
};
exports.ContainerConsumer = ContainerConsumer;
const WithContainer = (Component) => {
    return (props) => (<ContainerConsumer>
      {(container) => {
            return <Component {...props} container={container}/>;
        }}
    </ContainerConsumer>);
};
exports.WithContainer = WithContainer;
const useContainer = () => {
    const context = (0, react_1.useContext)(ContainerContext);
    if (!context) {
        throw Error(`useContainer: Context is null`);
    }
    return context;
};
exports.useContainer = useContainer;
const useService = (service, deps) => {
    const c = useContainer();
    return (0, react_1.useMemo)(() => c.get(service), deps);
};
exports.useService = useService;
