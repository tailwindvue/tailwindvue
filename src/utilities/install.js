import defaultOptions from '../stubs/options';
import defaultTheme from '../stubs/theme';
import kebabCase from 'lodash.kebabcase';
import lowerFirst from 'lodash.lowerfirst';
import deepmerge from 'deepmerge';

/**
 * Install the component.
 *
 * This works by adding and install function to the component. The install function adds the component to the Vue
 * instance. This also gives us an opportunity to modify the component (e.g.: add props) before we inject it
 * into the Vue instance.
 *
 * @param {Object} component
 */
export default function install(component) {
    component.install = (Vue, options = {}) => {
        options = deepmerge(defaultOptions, options);

        Vue.component(name(options, component), {
            ...(component),
            ...{
                props: props(component)
            }
        });
    };
}

/**
 * Make the name of the component.
 *
 * E.g.: 'tw-panel'
 *
 * @param {object} options
 * @param {object} component
 * @returns {*}
 */
function name(options, component) {
    return options.prefix + '-' + kebabCase(component.name);
}

/**
 * Make a new set of props that can be injected into the component.
 *
 * @param {object} component
 * @returns {*}
 */
function props(component) {
    const { props } = component;

    props['theme'] = {
        default: () => defaultTheme[lowerFirst(component.name)]
    };

    return props;
}
