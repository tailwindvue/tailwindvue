import Vue from 'vue';
import install from '../../src/utilities/install';

const TestComponent = {
    name: 'TestComponent',
    install: null,
    props: {
        theme: {}
    }
};

jest.mock('../../src/stubs/theme', () => {
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
    it('can install the component', () => {
        install(TestComponent);

        Vue.use(TestComponent);

        expect(Vue.options.components['tw-test-component']).not.toBeUndefined();
    });
});
