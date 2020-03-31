import '@/assets/css/tailwind.css';
import deepmerge from 'deepmerge';
import { toKebabCase } from './helpers';
import defaultOptions from './stubs/defaultOptions';
import defaultTheme from './stubs/defaultTheme';
import Input from './components/Input';
import Panel from './components/Panel';

const components = [
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
    Input,
    Panel
};

export default {
    install(Vue, options) {
        components.forEach(component => Vue.use(component, options));
    }
};
