import { shallowMount } from '@vue/test-utils';
import { Heading } from '../../src/main';

describe('Heading', () => {

    it('renders the app component', () => {
        const wrapper = shallowMount(Heading);

        expect(wrapper.contains('div')).toBe(true);
    });

    it('renders the default slot', () => {
        const wrapper = shallowMount(Heading, {
            slots: {
                default: 'A heading here'
            }
        });

        expect(wrapper.vm.$el.innerHTML).toContain('A heading here');
    });
});
