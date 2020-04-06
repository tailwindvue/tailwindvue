import defaultOptions from '../stubs/defaultOptions';
import defaultTheme from '../stubs/defaultTheme';
import deepmerge from 'deepmerge';

/**
 * Component Installer.
 */
export default class Install {
    /**
     * Install the component.
     *
     * This works by adding and install function to the component. The install function adds the component to the Vue
     * instance. This also gives us an opportunity to modify the component (e.g.: add props) before we inject it
     * into the Vue instance.
     *
     * @param {Object} component
     */
    static component(component) {
        component.install = (Vue, options = {}) => {
            options = deepmerge(defaultOptions, options);

            Vue.component(this.name(options, component), {
                ...(component),
                ...{
                    props: this.props(component)
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
    static name(options, component) {
        return options.prefix + '-' + this.toKebabCase(component.name);
    }

    /**
     * Make a new set of props that can be injected into the component.
     *
     * @param {object} component
     * @returns {*}
     */
    static props(component) {
        const { props } = component;

        props['theme'] = {
            default: () => defaultTheme[component.name]
        };

        return props;
    }
    /**
     * Convert the component name from TitleCase to KebabCase.
     *
     * E.g.: 'MyComponent' -> 'my-component'
     * @param string
     * @returns {*|string}
     */
    static toKebabCase(string) {
        return string && string.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.toLowerCase())
            .join('-');
    }
}
