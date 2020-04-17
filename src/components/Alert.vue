<template>
    <div v-if="isRendered"
         :class="[theme.component, theme.types[type]]">
        <div v-if="$slots.icon"
             :class="theme.icon">
            <slot name="icon" />
        </div>
        <div :class="theme.body">
            <slot />
            <div v-if="dismissable"
                 :class="theme.action"
                 @click="dismissAlert">
                <slot name="action">
                    &times;
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    import theme from '../stubs/theme';

    export default {
        name: 'Alert',

        props: {
            type: {
                type: String,
                default: 'default',
                required: false,
                validator: value => {
                    return [
                        'default',
                        'info',
                        'warning',
                        'danger',
                        'success'
                    ].includes(value);
                }
            },

            render: {
                type: [Number, Boolean],
                default: true,
                required: false,
            },

            dismissable: {
                type: Boolean,
                default: false,
                required: false,
            },

            theme: {
                type: Object,
                default: () => theme.alert,
                required: false
            }
        },

        data() {
            return {
                isRendered: typeof this.render === 'boolean' ? this.render : true
            };
        },

        watch: {
            render(value) {
                if (typeof value === 'number') {
                    this.dismissAlertAfterSeconds(value);
                }
            }
        },

        mounted() {
            if (this.render && typeof this.render === 'number') {
                this.dismissAlertAfterSeconds(this.render);
            }
        },

        methods: {
            dismissAlert() {
                this.isRendered = !this.isRendered;
                this.$emit('dismissed', this);
            },

            dismissAlertAfterSeconds(seconds) {
                setTimeout(() => this.dismissAlert(), seconds * 1000);
            }
        },
    };
</script>
