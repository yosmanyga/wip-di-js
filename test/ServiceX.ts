import {decorate, injectable} from '../src'

class ServiceX {
  public greet(
    name: string
  ): string {
    return `Hello ${name}`
  }
}

decorate(injectable(), ServiceX)

export default ServiceX
