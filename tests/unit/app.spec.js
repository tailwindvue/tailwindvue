import { shallowMount } from '@vue/test-utils';
import { App } from '../../src/main';

describe('App', () => {
    it('renders the app component', () => expect(shallowMount(App).contains('div')).toBe(true));

    it('renders the default slot', () => {
        const wrapper = shallowMount(App, {
            slots: {
                default: 'Some content here'
            }
        });

        expect(wrapper.vm.$el.innerHTML).toContain('Some content here');
    });
});
