import { shallowMount } from '@vue/test-utils';
import { Panel } from '../../src/main';

describe('Panel', () => {
    it('renders the panel', () => expect(shallowMount(Panel).contains('div')).toBe(true));

    it('renders the default slot', () => {
        const wrapper = shallowMount(Panel, {
            slots: {
                default: 'Some content here'
            }
        });

        expect(wrapper.vm.$el.innerHTML).toContain('Some content here');
    });

    it('renders the header slot', () => {
        const wrapper = shallowMount(Panel, {
            slots: {
                header: 'Header content here'
            }
        });

        expect(wrapper.vm.$el.innerHTML).toContain('Header content here');
    });
});
