import { Container, ContainerModule, decorate, inject, multiInject, injectable, unmanaged, optional } from 'inversify';
const loadModules = (container, module) => {
    if (!Array.isArray(module)) {
        module = [module];
    }
    module.forEach(module => container.load(module));
};
export { Container, ContainerModule, inject, multiInject, injectable, decorate, unmanaged, optional, loadModules };
