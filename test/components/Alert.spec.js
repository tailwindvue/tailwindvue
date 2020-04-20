import { shallowMount } from '@vue/test-utils';
import { Alert } from '../../src/main';
import theme from '../../src/stubs/theme';
import { toContainElement, toHaveClasses } from '../utilities';

jest.useFakeTimers();

/**
 * @typedef {jest.expect} expect
 */
expect.extend({
    toContainElement,
    toHaveClasses
});

describe('Alert', () => {
    describe('Features', () => {
        it('can be mounted as vue component', () => {
            const alert = shallowMount(Alert);

            expect(alert.isVueInstance()).toBeTruthy();
        });

        it('is dismissed if the dismiss button is clicked', async () => {
            const alert = shallowMount(Alert, {
                propsData: { dismissable: true }
            });

            expect(alert.isEmpty()).toBeFalsy();

            alert.findAll('button').trigger('click');

            await alert.vm.$nextTick();
            expect(alert.isEmpty()).toBeTruthy();
        });

        it('is dismissed after a number of seconds if the duration is set before mounting', async () => {
            const alert = shallowMount(Alert, {
                propsData: { duration: 1 }
            });

            expect(alert.isEmpty()).toBeFalsy();

            jest.runOnlyPendingTimers();

            await alert.vm.$nextTick();
            expect(alert.isEmpty()).toBeTruthy();
        });

        it('is dismissed after a number of seconds if the duration is set after mounting', async () => {
            const alert = shallowMount(Alert);

            expect(alert.isEmpty()).toBeFalsy();

            alert.setProps({ duration: 2 });

            await alert.vm.$nextTick();

            jest.runOnlyPendingTimers();

            await alert.vm.$nextTick();
            expect(alert.isEmpty()).toBeTruthy();
        });

        it('is rendered if the render prop is not set', () => {
            const alert = shallowMount(Alert);

            expect(alert.isEmpty()).toBeFalsy();
        });

        it('is rendered if the render prop is set to true', () => {
            const alert = shallowMount(Alert, {
                propsData: { render: true }
            });

            expect(alert.isEmpty()).toBeFalsy();
        });

        it('is not rendered if the render prop is set to false', () => {
            const alert = shallowMount(Alert, {
                propsData: {
                    render: false,
                    renderDuration: 10
                }
            });

            expect(alert.isEmpty()).toBeTruthy();
        });

        it('renders the progress bar if the showProgress prop is set to true and the alert has a duration', () => {
            const alert = shallowMount(Alert, {
                propsData: {
                    showProgress: true,
                    duration: 10
                }
            });

            expect(alert).toContainElement(theme.alert.progress.wrapper);
        });

        it('does not render the progress bar if the showProgress prop is set to false', () => {
            const alert = shallowMount(Alert, {
                propsData: {
                    showProgress: false,
                    duration: 10
                }
            });

            expect(alert).not.toContainElement(theme.alert.progress.wrapper);
        });

        it('does not render the progress bar if the showProgress prop is not defined', () => {
            const alert = shallowMount(Alert, {
                propsData: {
                    duration: 10
                }
            });

            expect(alert).not.toContainElement(theme.alert.progress.wrapper);
        });

        it('does not render the progress bar if the duration is not set', () => {
            const alert = shallowMount(Alert, {
                propsData: {
                    showProgress: true,
                }
            });

            expect(alert).not.toContainElement(theme.alert.progress.wrapper);
        });

        it('renders the remaining duration if the showRemainingDuration prop is set to true', () => {
            const alert = shallowMount(Alert, {
                propsData: {
                    showRemainingDuration: true,
                    duration: 10
                }
            });

            expect(alert).toContainElement(theme.alert.remainingDuration);
        });

        it('does not render the remaining duration if the showRemainingDuration prop is set to false', () => {
            const alert = shallowMount(Alert, {
                propsData: {
                    showRemainingDuration: false,
                    duration: 10
                }
            });

            expect(alert).not.toContainElement(theme.alert.remainingDuration);
        });

        it('does not render the remaining duration if the showRemainingDuration prop is not set', () => {
            const alert = shallowMount(Alert, {
                propsData: {
                    duration: 10
                }
            });

            expect(alert).not.toContainElement(theme.alert.remainingDuration);
        });

        it('does not render the remaining duration if the duration is not set', () => {
            const alert = shallowMount(Alert);

            expect(alert).not.toContainElement(theme.alert.remainingDuration);
        });

        it('does not render the dismiss button if the dismissable prop is set to false', () => {
            const alert = shallowMount(Alert, {
                propsData: {
                    dismissable: false
                }
            });

            expect(alert).not.toContainElement(theme.alert.dismissButton);
        });

        it('does not render the dismiss button if the dismissable prop is not set', () => {
            const alert = shallowMount(Alert);

            expect(alert).not.toContainElement(theme.alert.dismissButton);
        });

        it('renders the dismiss button if the dismissable prop is set to true', () => {
            const alert = shallowMount(Alert, {
                propsData: {
                    dismissable: true
                }
            });

            expect(alert).toContainElement(theme.alert.dismissButton);
        });
    });

    describe('Styles', () => {
        it('applies the component styles to component', () => {
            const alert = shallowMount(Alert, {
                propsData: { type: 'success' }
            });

            expect(alert).toHaveClasses(theme.alert.component);
        });

        it('applies the correct type styles to the component', () => {
            const successAlert = shallowMount(Alert, {
                propsData: { type: 'success' }
            });

            expect(successAlert).toHaveClasses(theme.alert.types.success);
        });

        it('applies the icon styles to the icon', () => {
            const alert = shallowMount(Alert, {
                slots: { icon: '<i class="fa fa-info"></i>' }
            });

            expect(alert.findAll('div').at(1)).toHaveClasses(theme.alert.icon);
        });

        it('applies the body styles to the body', () => {
            const alert = shallowMount(Alert);

            expect(alert.findAll('div').at(1)).toHaveClasses(theme.alert.body);
        });

        it('applies the dismiss button styles to the dismiss button', () => {
            const alert = shallowMount(Alert, {
                propsData: { dismissable: true }
            });

            expect(alert.find('button')).toHaveClasses(theme.alert.dismissButton);
        });

        it('applies the progress alert styles to the progress alert', () => {
            const alert = shallowMount(Alert, {
                propsData: {
                    showProgress: true,
                    duration: 2
                }
            });

            expect(alert.findAll('div').at(1)).toHaveClasses(theme.alert.progress.wrapper);
        });

        it('applies the progress bar styles to the progress bar', () => {
            const alert = shallowMount(Alert, {
                propsData: {
                    showProgress: true,
                    duration: 2
                }
            });

            expect(alert.findAll('div').at(2)).toHaveClasses(theme.alert.progress.bar);
        });

        it('applies the progress type styles to the progress type', () => {
            const alert = shallowMount(Alert, {
                propsData: {
                    showProgress: true,
                    duration: 2
                }
            });

            expect(alert.findAll('div').at(2)).toHaveClasses(theme.alert.progress.types.default);
        });

        it('applies the remaining duration styles to the remaining duration', () => {
            const alert = shallowMount(Alert, {
                propsData: {
                    showRemainingDuration: true,
                    duration: 2
                }
            });

            expect(alert.findAll('div').at(3)).toHaveClasses(theme.alert.remainingDuration);
        });
    });

    describe('Props', () => {
        it('accepts a type prop', () => {
            const alert = shallowMount(Alert);

            const typeProp = alert.vm.$options.props['type'];

            expect(typeProp.type).toBe(String);

            expect(typeProp.default).toBe('default');

            expect(typeProp.required).toBe(false);

            expect(typeProp.validator('default')).toBeTruthy();
            expect(typeProp.validator('info')).toBeTruthy();
            expect(typeProp.validator('warning')).toBeTruthy();
            expect(typeProp.validator('danger')).toBeTruthy();
            expect(typeProp.validator('success')).toBeTruthy();
            expect(typeProp.validator('invalid-type')).toBeFalsy();
        });

        it('accepts a dismissable prop', () => {
            const alert = shallowMount(Alert);

            const dismissableProp = alert.vm.$options.props['dismissable'];

            expect(dismissableProp.type).toBe(Boolean);

            expect(dismissableProp.default).toBeFalsy();

            expect(dismissableProp.required).toBeFalsy();
        });

        it('accepts a render prop', () => {
            const alert = shallowMount(Alert);

            const renderProp = alert.vm.$options.props['render'];

            expect(renderProp.type).toEqual(Boolean);

            expect(renderProp.default).toBeTruthy();

            expect(renderProp.required).toBeFalsy();
        });

        it('accepts a duration prop', () => {
            const alert = shallowMount(Alert);

            const durationProp = alert.vm.$options.props['duration'];

            expect(durationProp.type).toEqual(Number);

            expect(durationProp.default).toBeUndefined();

            expect(durationProp.required).toBeFalsy();

            expect(durationProp.validator(-1)).toBeFalsy();
            expect(durationProp.validator(0)).toBeTruthy();
            expect(durationProp.validator(1)).toBeTruthy();
        });

        it('accepts a showRemainingDuration prop', () => {
            const alert = shallowMount(Alert);

            const showRemainingDurationProp = alert.vm.$options.props['showRemainingDuration'];

            expect(showRemainingDurationProp.type).toEqual(Boolean);

            expect(showRemainingDurationProp.default).toBeFalsy();

            expect(showRemainingDurationProp.required).toBeFalsy();
        });

        it('accepts a showProgress prop', () => {
            const alert = shallowMount(Alert);

            const showProgressProp = alert.vm.$options.props['showProgress'];

            expect(showProgressProp.type).toEqual(Boolean);

            expect(showProgressProp.default).toBeFalsy();

            expect(showProgressProp.required).toBeFalsy();
        });

        it('accepts a theme prop', () => {
            const alert = shallowMount(Alert);

            const durationProp = alert.vm.$options.props['theme'];

            expect(durationProp.type).toBe(Object);

            expect(durationProp.default()).toBe(theme.alert);

            expect(durationProp.required).toBeFalsy();
        });
    });

    describe('Slots', () => {
        it('renders the default slot', () => {
            const body = 'Alert body';

            const alert = shallowMount(Alert, {
                slots: { default: body }
            });

            expect(alert.vm.$el.innerHTML).toContain(body);
        });

        it('renders the icon slot', () => {
            const icon = '<i class="fa fa-info"></i>';

            const alert = shallowMount(Alert, {
                slots: { icon }
            });

            expect(alert.vm.$el.innerHTML).toContain(icon);
        });

        it('renders the action slot if the alert is dismissable', () => {
            const action = '<i class="fa fa-times"></i>';

            const alert = shallowMount(Alert, {
                propsData: { dismissable: true },
                slots: { action }
            });

            expect(alert.vm.$el.innerHTML).toContain(action);
        });

        it('does not render the action slot if the alert is not dismissable', () => {
            const action = '<i class="fa fa-times"></i>';

            const alert = shallowMount(Alert, {
                slots: { action }
            });

            expect(alert.vm.$el.innerHTML).not.toContain(action);
        });

        it('renders a default action icon if the alert is dismissable and the action slot is not set', () => {
            const alert = shallowMount(Alert, {
                propsData: { dismissable: true }
            });

            expect(alert.vm.$el.innerHTML).toContain('×');
        });
    });

    describe('Computed', () => {
        it('computes the remaining duration percentage', () => {
            const localThis = { duration: 10, remainingDuration: 3 };

            expect(Alert.computed.remainingDurationPercentage.call(localThis)).toBe(30);
        });

        it('computes the remaining duration style', () => {
            const localThis = { remainingDurationPercentage: 50 };

            expect(Alert.computed.remainingDurationStyle.call(localThis)).toBe('width: 50%;');
        });
    });

    describe('Events', () => {
        it('emits a dismissed event if the dismiss button is clicked', () => {
            const alert = shallowMount(Alert, {
                propsData: { dismissable: true }
            });

            alert.findAll('button').trigger('click');

            expect(alert.emitted('dismissed')).toBeTruthy();
        });

        it('emits a remainingDurationChanged event when the remaining duration has changed', async () => {
            const alert = shallowMount(Alert, {
                propsData: { duration: 5 }
            });

            jest.advanceTimersToNextTimer();

            expect(alert.emitted('remainingDurationChanged')).toEqual([[4]]);
        });
    });
});
