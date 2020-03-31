import '@/assets/css/tailwind.css';
import deepmerge from 'deepmerge';
import { toKebabCase } from './helpers';
import defaultOptions from './stubs/defaultOptions';
import defaultTheme from './stubs/defaultTheme';
import Input from './components/Input';
import Panel from './components/Panel';
import Nav from './components/Nav';
import Heading from './components/Heading';

const components = [
    Heading,
    Nav,
    Panel,
    Input
];

components.forEach(component => {
    component.install = (Vue, options = {}) => {
        options = deepmerge(defaultOptions, options);

        const { props } = component;

        props['theme'] = {
            default: () => defaultTheme[toKebabCase(component.name)]
        };

        Vue.component(options.prefix + toKebabCase(component.name), {
            ...component,
            ...{
                props
            }
        });
    };
});


export {
    Heading,
    Input,
    Panel,
    Nav
};

export default {
    install(Vue, options) {
        components.forEach(component => Vue.use(component, options));
    }
};
