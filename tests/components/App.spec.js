import { shallowMount } from '@vue/test-utils';
import { App } from '../../src/main';

describe('App', () => {
    it('renders the app component', () => expect(shallowMount(App).contains('div')).toBe(true));

    it('renders the default slot', () => {
        const content = 'Default Slot';

        const wrapper = shallowMount(App, {
            slots: {
                default: content
            }
        });

        expect(wrapper.vm.$el.innerHTML).toContain(content);
    });

    it('renders the left slot', () => {
        const content = 'Left Slot';

        const wrapper = shallowMount(App, {
            slots: {
                left: content
            }
        });

        expect(wrapper.vm.$el.innerHTML).toContain(content);
    });

    it('renders the right slot', () => {
        const content = 'Right Slot';

        const wrapper = shallowMount(App, {
            slots: {
                right: content
            }
        });

        expect(wrapper.vm.$el.innerHTML).toContain(content);
    });
});
