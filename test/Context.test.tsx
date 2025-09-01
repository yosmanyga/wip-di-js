/**
 * @jest-environment jsdom
 */

import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import 'reflect-metadata'
import {Container, ContainerConsumer, ContainerProvider, useContainer, useService, WithContainer, WithContainerProps} from '../src'
import container, {ServiceX} from './Container'

test('ContainerConsumer provides access to container', () => {
  const Greet = ({name}: {name: string}) => {
    return <ContainerConsumer>
      {(container: Container) => {
        return <p>
          {container.get(ServiceX).greet(name)}
        </p>
      }}
    </ContainerConsumer>
  }

  render(<ContainerProvider value={container}>
    <Greet name='John'/>
  </ContainerProvider>)

  expect(screen.getByText(/^Hello/)).toHaveTextContent('Hello John')
})

test('WithContainer provides access to container', () => {
  type GreetProps = { name: string } & WithContainerProps;
  
  const Greet = ({container, name}: GreetProps) => {
    return <p>
      {container.get(ServiceX).greet(name)}
    </p>
  }

  const GreetWithContainer = WithContainer<GreetProps>(Greet)

  render(<ContainerProvider value={container}>
    <GreetWithContainer name='John'/>
  </ContainerProvider>)

  expect(screen.getByText(/^Hello/)).toHaveTextContent('Hello John')
})

test('useContainer provides access to container', () => {
  const Greet = ({name}: {name: string}) => {
    const container = useContainer()

    return <p>
      {container.get(ServiceX).greet(name)}
    </p>
  }

  render(<ContainerProvider value={container}>
    <Greet name='John'/>
  </ContainerProvider>)

  expect(screen.getByText(/^Hello/)).toHaveTextContent('Hello John')
})

test('useService provides access to a service', () => {
  const Greet = ({name}: {name: string}) => {
    const service = useService(ServiceX, [])

    return <p>
      {service.greet(name)}
    </p>
  }

  render(<ContainerProvider value={container}>
    <Greet name='John'/>
  </ContainerProvider>)

  expect(screen.getByText(/^Hello/)).toHaveTextContent('Hello John')
})
