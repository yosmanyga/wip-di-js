import React from 'react';
import {ComponentType, createContext, DependencyList, PropsWithChildren, ReactElement, useContext, useMemo} from 'react'
import {Container, interfaces} from 'inversify'

const ContainerContext = createContext<Container | null>(null)

const ContainerProvider = ({
    value,
    children
}: PropsWithChildren<ContainerProviderProps>) => {
    return <ContainerContext.Provider value={value}>
        {children}
    </ContainerContext.Provider>
}

type ContainerProviderProps = {
    value: Container
}

const ContainerConsumer = ({
    children
}: ContainerConsumerProps) => {
    return <ContainerContext.Consumer>
        {(container) => {
            if (!container || !children) {
                return null
            }

            return children(container)
        }}
    </ContainerContext.Consumer>
}

type ContainerConsumerProps = {
    children?(container: Container): ReactElement;
}

const WithContainer = <P, >(
    Component: ComponentType<P & WithContainerProps>
) => {
    return (props: Omit<P, keyof WithContainerProps>) => (
        <ContainerConsumer>
            {(container) => {
                return <Component {...props as P} container={container}/>
            }}
        </ContainerConsumer>
    )
}

export type WithContainerProps = {
    container: Container
}

const useContainer = () => {
    const context = useContext(ContainerContext)

    if (!context) {
        throw Error(`useContainer: Context is null`)
    }

    return context
}

const useService = <T, >(service: interfaces.ServiceIdentifier<T>, deps: DependencyList): T => {
    const c = useContainer()

    return useMemo(() => c.get<T>(service), deps)
}

export {
    ContainerProvider,
    ContainerConsumer,
    WithContainer,
    useContainer,
    useService
}
