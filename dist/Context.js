import React from 'react';
import { createContext, useContext, useMemo } from 'react';
const ContainerContext = createContext(null);
const ContainerProvider = ({ value, children }) => {
    return React.createElement(ContainerContext.Provider, { value: value }, children);
};
const ContainerConsumer = ({ children }) => {
    return React.createElement(ContainerContext.Consumer, null, (container) => {
        if (!container || !children) {
            return null;
        }
        return children(container);
    });
};
const WithContainer = (Component) => {
    return (props) => (React.createElement(ContainerConsumer, null, (container) => {
        return React.createElement(Component, Object.assign({}, props, { container: container }));
    }));
};
const useContainer = () => {
    const context = useContext(ContainerContext);
    if (!context) {
        throw Error(`useContainer: Context is null`);
    }
    return context;
};
const useService = (service, deps) => {
    const c = useContainer();
    return useMemo(() => c.get(service), deps);
};
export { ContainerProvider, ContainerConsumer, WithContainer, useContainer, useService };
