import React from 'react';
import { ComponentType, DependencyList, PropsWithChildren, ReactElement } from 'react';
import { Container, interfaces } from 'inversify';
declare const ContainerProvider: ({ value, children }: PropsWithChildren<ContainerProviderProps>) => React.JSX.Element;
type ContainerProviderProps = {
    value: Container;
};
declare const ContainerConsumer: ({ children }: ContainerConsumerProps) => React.JSX.Element;
type ContainerConsumerProps = {
    children?(container: Container): ReactElement;
};
declare const WithContainer: <P>(Component: ComponentType<P & WithContainerProps>) => (props: Omit<P, keyof WithContainerProps>) => React.JSX.Element;
export type WithContainerProps = {
    container: Container;
};
declare const useContainer: () => Container;
declare const useService: <T>(service: interfaces.ServiceIdentifier<T>, deps: DependencyList) => T;
export { ContainerProvider, ContainerConsumer, WithContainer, useContainer, useService };
//# sourceMappingURL=Context.d.ts.map