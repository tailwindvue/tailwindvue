import '@/assets/css/tailwind.css';
import deepmerge from 'deepmerge';
import { toKebabCase } from '@/helpers';
import defaultOptions from '@/stubs/defaultOptions';
import defaultTheme from '@/stubs/defaultTheme';
import Input from '@/components/Input';
import Panel from '@/components/Panel';
import Nav from '@/components/Nav';
import Heading from '@/components/Heading';
import App from '@/components/App';

const components = [
    App,
    Heading,
    Nav,
    Panel,
    Input,
];

components.forEach(component => {
    component.install = (Vue, options = {}) => {
        options = deepmerge(defaultOptions, options);

        const { props } = component;

        props['theme'] = {
            default: () => defaultTheme[toKebabCase(component.name)]
        };

        console.log(props);

        Vue.component(options.prefix + toKebabCase(component.name), {
            ...component,
            ...{
                props
            }
        });
    };
});

export {
    App,
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
