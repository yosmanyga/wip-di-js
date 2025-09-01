import {Container, ContainerModule, loadModules} from '../src'
import ServiceX from './ServiceX'

const container = new Container()

loadModules(container, [
  new ContainerModule((bind) => {
    bind(ServiceX).to(ServiceX)
  })
])

export {
  ServiceX
}

export default container
