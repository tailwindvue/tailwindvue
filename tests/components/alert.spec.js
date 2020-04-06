import { shallowMount } from '@vue/test-utils';
import { Alert } from '../../src/main';

jest.useFakeTimers();

jest.mock('../../src/stubs/defaultTheme', () => {
    return {
        __esModule: true,
        default: {
            Alert: {
                types: {
                    success: 'success-classes'
                }
            }
        }
    };
});

describe('Alert', () => {

    it('renders the app component', () => {
        const wrapper = shallowMount(Alert);

        expect(wrapper.contains('div')).toBeTruthy();
    });

    it('renders the default slot', () => {
        const body = 'Alert body';

        const wrapper = shallowMount(Alert, {
            slots: { default: body }
        });

        expect(wrapper.vm.$el.innerHTML).toContain(body);
    });

    it('renders the icon slot', () => {
        const icon = '<i class="fa fa-info"></i>';

        const wrapper = shallowMount(Alert, {
            slots: { icon }
        });

        expect(wrapper.vm.$el.innerHTML).toContain(icon);
    });

    it('renders the action slot if the alert is dismissable', () => {
        const action = '<i class="fa fa-times"></i>';

        const wrapper = shallowMount(Alert, {
            propsData: { dismissable: true },
            slots: { action }
        });

        expect(wrapper.vm.$el.innerHTML).toContain(action);
    });

    it('does not render the action slot if the alert is not dismissable', () => {
        const action = '<i class="fa fa-times"></i>';

        const wrapper = shallowMount(Alert, {
            slots: { action }
        });

        expect(wrapper.vm.$el.innerHTML).not.toContain(action);
    });

    it('renders a default action slot icon if the alert is dismissable and no content was set', () => {
        const wrapper = shallowMount(Alert, {
            propsData: { dismissable: true }
        });

        expect(wrapper.vm.$el.innerHTML).toContain('×');
    });

    it('disappears if the dismiss button is clicked', async () => {
        const wrapper = shallowMount(Alert, {
            propsData: { dismissable: true }
        });

        expect(wrapper.find('div').exists()).toBeTruthy();

        wrapper.find({ ref: 'dismiss-button' }).trigger('click');

        await wrapper.vm.$nextTick();

        expect(wrapper.find('div').exists()).toBeFalsy();
    });

    it('disappears after a number of seconds if the duration is set before mounting', async () => {
        const wrapper = shallowMount(Alert, {
            propsData: { duration: 1 }
        });

        expect(wrapper.find('div').exists()).toBeTruthy();

        jest.runAllTimers();

        await wrapper.vm.$nextTick();

        expect(wrapper.find('div').exists()).toBeFalsy();
    });

    it('disappears after a number of seconds if the duration is set after mounting', async () => {
        // Given we have mounted the alert component
        const wrapper = shallowMount(Alert);

        // We expect the component to exist
        expect(wrapper.find('div').exists()).toBeTruthy();

        // But if we set the duration prop on the component
        wrapper.setProps({duration : 2});

        // And wait for the watcher to set the timeout
        await wrapper.vm.$nextTick();

        // Advance the timer
        jest.runAllTimers();

        // And wait for the component to disappear
        await wrapper.vm.$nextTick();

        // We see that the component has disappeared
        expect(wrapper.find('div').exists()).toBeFalsy();
    });

    it('renders the correct classes for the alert type', () => {
        const wrapper = shallowMount(Alert, {
            propsData: { type: 'success' }
        });

        expect(wrapper.classes()).toContain('success-classes');
    });
});
