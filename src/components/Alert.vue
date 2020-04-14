<template>
    <div v-if="visible"
         :class="theme.component + ' ' + theme.types[type]">
        <div v-if="$slots.icon"
             :class="theme.icon">
            <slot name="icon" />
        </div>
        <div :class="theme.body">
            <div>
                <slot />
            </div>
            <div v-if="dismissable"
                 ref="dismiss-button"
                 :class="theme.action"
                 @click="dismiss">
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
                default: 'default',
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

            dismissable: {
                type: Boolean,
                default: false
            },

            duration: {
                type: [Number, Boolean],
                default: false
            },

            theme: {
                type: Object,
                default: () => theme.alert
            }
        },

        data() {
            return {
                visible: true
            };
        },

        watch: {
            duration(value) {
                this.setDurationTimeout(value);
            }
        },

        mounted() {
            if (this.duration) {
                this.setDurationTimeout(this.duration);
            }
        },

        methods: {
            dismiss() {
                this.visible = !this.visible;
                this.$emit('dismissed', this);
            },

            setDurationTimeout(value) {
                setTimeout(() => this.dismiss(), value * 1000);
            }
        },
    };
</script>
