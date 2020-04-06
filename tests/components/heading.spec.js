import { shallowMount } from '@vue/test-utils';
import { Heading } from '../../src/main';

describe('Heading', () => {

    it('renders the app component', () => {
        const wrapper = shallowMount(Heading);

        expect(wrapper.contains('div')).toBeTruthy();
    });

    it('renders the default slot', () => {
        const content = 'Heading Content';

        const wrapper = shallowMount(Heading, {
            slots: { default: content }
        });

        expect(wrapper.vm.$el.innerHTML).toContain(content);
    });

    it('renders the heading as the appropriate heading tag', () => {
        const wrapper = shallowMount(Heading);

        expect(wrapper.contains('h1')).toBeTruthy();
    });

    it('renders the h1 type if no type is passed', () => {
        const wrapper = shallowMount(Heading);

        expect(wrapper.vm.$props.type).toBe('h1');
    });

    it('accepts a type that can modify the heading type', () => {
        const wrapper = shallowMount(Heading, {
            propsData: { type: 'h2' }
        });

        expect(wrapper.vm.$props.type).toBe('h2');
        expect(wrapper.contains('h2')).toBeTruthy();
    });
});
