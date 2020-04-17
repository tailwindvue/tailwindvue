import { shallowMount } from '@vue/test-utils';
import { Alert } from '../../src/main';
import theme from '../../src/stubs/theme';

// Fake timing functions
jest.useFakeTimers();

describe('Alert', () => {
    describe('Features', () => {
        it('can be mounted as vue component', () => {
            // Given an alert
            const wrapper = shallowMount(Alert);

            // We expect it to be mounted as a valid Vue component
            expect(wrapper.isVueInstance()).toBeTruthy();
        });

        it('is dismissed if the dismiss button is clicked', () => {
            // Given a dismissable alert
            const wrapper = shallowMount(Alert, {
                propsData: { dismissable: true }
            });

            // We expect the alert to exist in the DOM
            expect(wrapper.find('div').exists()).toBeTruthy();

            // But when the dismissed button is clicked
            wrapper.findAll('div').at(2).trigger('click');

            // We expect the alert to be dismissed and no longer exist in the DOM
            wrapper.vm.$nextTick().then(() => expect(wrapper.find('div').exists()).toBeFalsy());
        });

        it('is dismissed after a number of seconds if the render duration is set before mounting', async () => {
            // Given an alert with a duration of one second
            const wrapper = shallowMount(Alert, {
                propsData: { render: 1 }
            });

            // We expect the alert to exist in the DOM
            expect(wrapper.find('div').exists()).toBeTruthy();

            // But after the duration has elapsed
            jest.runAllTimers();

            // We expect the alert to be dismissed and no longer exist in the DOM
            await wrapper.vm.$nextTick();
            expect(wrapper.find('div').exists()).toBeFalsy();
        });

        it('is dismissed after a number of seconds if the render duration is set after mounting', async () => {
            // Given an alert
            const wrapper = shallowMount(Alert);

            // We expect the component to exist in the DOM
            expect(wrapper.find('div').exists()).toBeTruthy();

            // But if we set the duration prop on the component after it has been mounted
            wrapper.setProps({ render: 2 });

            // And wait for the watcher to set the timeout
            await wrapper.vm.$nextTick();

            // Then after the duration has elapsed
            jest.runAllTimers();

            // We expect the alert to be dismissed and no longer exist in the DOM
            await wrapper.vm.$nextTick();
            expect(wrapper.find('div').exists()).toBeFalsy();
        });

        it('is rendered if the render prop is not set', () => {
            // Given an alert
            const wrapper = shallowMount(Alert);

            // We expect the alert not to be rendered
            expect(wrapper.find('div').exists()).toBeTruthy();
        });

        it('is rendered if the render prop is set to true', () => {
            // Given an alert
            const wrapper = shallowMount(Alert, {
                propsData: { render: true }
            });

            // We expect the alert not to be rendered
            expect(wrapper.find('div').exists()).toBeTruthy();
        });

        it('is not rendered if the render prop is set to false', () => {
            // Given an alert
            const wrapper = shallowMount(Alert, {
                propsData: { render: false }
            });

            // We expect the alert not to be rendered
            expect(wrapper.find('div').exists()).toBeFalsy();
        });
    });

    describe('Styles', () => {
        it('applies the component styles to component', () => {
            // Given an alert
            const wrapper = shallowMount(Alert, {
                propsData: { type: 'success' }
            });

            // We expect it to have component classes
            expect(wrapper.classes().join(' ')).toContain(theme.alert.component);
        });

        it('applies the correct type styles to the component', () => {
            // Given an 'success' alert
            const wrapper = shallowMount(Alert, {
                propsData: { type: 'success' }
            });

            // We expect it to have the classes for the 'success' alert type
            expect(wrapper.classes().join(' ')).toContain(theme.alert.types.success);
        });

        it('applies the icon styles to the icon', () => {
            // Given an alert with an icon slot
            const wrapper = shallowMount(Alert, {
                slots: { icon: '<i class="fa fa-info"></i>' }
            });

            // We expect the icon to have the icon classes
            expect(wrapper.findAll('div').at(1).classes().join(' ')).toContain(theme.alert.icon);
        });

        it('applies the body styles to the body', () => {
            // Given an alert
            const wrapper = shallowMount(Alert);

            // We expect the alert body to have the body classes
            expect(wrapper.findAll('div').at(1).classes().join(' ')).toContain(theme.alert.body);
        });

        it('applies the action styles to the action', () => {
            // Given a dismissable alert
            const wrapper = shallowMount(Alert, {
                propsData: { dismissable: true }
            });

            // We expect the action to have the action styles
            expect(wrapper.findAll('div').at(2).classes().join(' ')).toContain(theme.alert.action);
        });
    });

    describe('Props', () => {
        it('accepts a type prop', () => {
            // Given an alert
            const wrapper = shallowMount(Alert);

            // With a type prop
            const typeProp = wrapper.vm.$options.props['type'];

            // We expect it to be a String
            expect(typeProp.type).toBe(String);

            // We expect the default value to be 'default'
            expect(typeProp.default).toBe('default');

            // We expect the prop not to be required
            expect(typeProp.required).toBe(false);

            // We expect the type prop to accept only valid values
            expect(typeProp.validator('default')).toBeTruthy();
            expect(typeProp.validator('info')).toBeTruthy();
            expect(typeProp.validator('warning')).toBeTruthy();
            expect(typeProp.validator('danger')).toBeTruthy();
            expect(typeProp.validator('success')).toBeTruthy();
            expect(typeProp.validator('invalid-type')).toBeFalsy();
        });

        it('accepts a dismissable prop', () => {
            // Given an alert
            const wrapper = shallowMount(Alert);

            // With a dismissable prop
            const dismissableProp = wrapper.vm.$options.props['dismissable'];

            // We expect it to be a Boolean
            expect(dismissableProp.type).toBe(Boolean);

            // We expect the default value to be false
            expect(dismissableProp.default).toBeFalsy();

            // We expect the prop not to be required
            expect(dismissableProp.required).toBeFalsy();
        });

        it('accepts a render prop', () => {
            // Given an alert
            const wrapper = shallowMount(Alert);

            // With a duration prop
            const durationProp = wrapper.vm.$options.props['render'];

            // We expect it to be a Number or a Boolean
            expect(durationProp.type).toEqual([Number, Boolean]);

            // We expect the default value to be true
            expect(durationProp.default).toBeTruthy();

            // We expect the prop not to be required
            expect(durationProp.required).toBeFalsy();
        });

        it('accepts a theme prop', () => {
            // Given an alert
            const wrapper = shallowMount(Alert);

            // With a theme prop
            const durationProp = wrapper.vm.$options.props['theme'];

            // We expect it to be an Object
            expect(durationProp.type).toBe(Object);

            // We expect the default value to be the default theme
            expect(durationProp.default()).toBe(theme.alert);

            // We expect the prop not to be required
            expect(durationProp.required).toBeFalsy();
        });
    });

    describe('Slots', () => {
        it('renders the default slot', () => {
            // Given an alert body
            const body = 'Alert body';

            // An an alert with a default slot containing the alert body
            const wrapper = shallowMount(Alert, {
                slots: { default: body }
            });

            // We expect the alert to contain the alert body
            expect(wrapper.vm.$el.innerHTML).toContain(body);
        });

        it('renders the icon slot', () => {
            // Given an icon
            const icon = '<i class="fa fa-info"></i>';

            // And an alert with an icon slot containing the icon
            const wrapper = shallowMount(Alert, {
                slots: { icon }
            });

            // We expect the alert to contain the icon
            expect(wrapper.vm.$el.innerHTML).toContain(icon);
        });

        it('renders the action slot if the alert is dismissable', () => {
            // Given an action icon
            const action = '<i class="fa fa-times"></i>';

            // And a dismissable alert with an action slot containing the action icon
            const wrapper = shallowMount(Alert, {
                propsData: { dismissable: true },
                slots: { action }
            });

            // We expect the alert to contain the action icon
            expect(wrapper.vm.$el.innerHTML).toContain(action);
        });

        it('does not render the action slot if the alert is not dismissable', () => {
            // Given an action icon
            const action = '<i class="fa fa-times"></i>';

            // And an alert with an action slot containing the action icon
            const wrapper = shallowMount(Alert, {
                slots: { action }
            });

            // We expect the alert not to contain the action icon
            expect(wrapper.vm.$el.innerHTML).not.toContain(action);
        });

        it('renders a default action icon if the alert is dismissable and the action slot is not set', () => {
            // Given a dismissable alert with no action slot set
            const wrapper = shallowMount(Alert, {
                propsData: { dismissable: true }
            });

            // We expect to see the default action icon
            expect(wrapper.vm.$el.innerHTML).toContain('×');
        });
    });

    describe('Events', () => {
        it('emits a dismissed event if the dismiss button is clicked', () => {
            // Given a dismissable alert
            const wrapper = shallowMount(Alert, {
                propsData: { dismissable: true }
            });

            // When the dismissed button is clicked
            wrapper.findAll('div').at(2).trigger('click');

            // We expect the alert to emit a dismissed event
            expect(wrapper.emitted('dismissed')).toBeTruthy();
        });
    });
});
