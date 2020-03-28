import '@/assets/css/tailwind.css';

import Input from './components/Input';

export {
    Input
};

const components = [
    Input
];

const defaultOptions = {
    prefix: 'tw-'
};

const TailwindVue = {
    install(Vue, options = defaultOptions) {
        components.forEach(component => Vue.component(options.prefix + toKebabCase(component.name), component));
    }
};

export default TailwindVue;

const toKebabCase = string => {
    return string && string.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('-');
};
