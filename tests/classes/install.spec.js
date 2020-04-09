import Vue from 'vue';
import Install from '../../src/classes/Install';
import defaultOptions from '../../src/stubs/defaultOptions';

const TestComponent = {
    name: 'TestComponent',
    install: null,
    props: {
        theme: {}
    }
};

jest.mock('../../src/stubs/defaultTheme', () => {
    return {
        __esModule: true,
        default: {
            testComponent: {
                'component': 'test-class'
            }
        }
    };
});

describe('Install', () => {
    it('can make populate the theme prop', () => {
        expect(Install.props(TestComponent).theme.default()).toMatchObject({ component: 'test-class' });
    });

    it('can generate the component name with no prefix option', () => {
        expect(Install.name(defaultOptions, TestComponent)).toBe('tw-test-component');
    });

    it('can generate the component name when a prefix option is specified', () => {
        expect(Install.name({ prefix: 'prefix' }, TestComponent)).toBe('prefix-test-component');
    });

    it('can install the component', () => {
        Install.component(TestComponent);

        Vue.use(TestComponent);

        expect(Vue.options.components['tw-test-component']).not.toBeUndefined();
    });
});
