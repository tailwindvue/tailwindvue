<template>
    <div v-if="visible" :class="theme.component + ' ' + theme.types[type]">
        <div v-if="$slots.icon" :class="theme.icon">
            <slot name="icon"/>
        </div>
        <div :class="theme.body">
            <div>
                <slot/>
            </div>
            <div ref="dismiss-button" v-if="dismissable" :class="theme.action" @click="dismiss">
                <slot name="action">&times;</slot>
            </div>
        </div>
    </div>
</template>

<script>
    import defaultTheme from '../stubs/theme';

    export default {
        name: 'Alert',

        mounted() {
            if (this.duration) {
                this.setDurationTimeout(this.duration);
            }
        },

        watch: {
            duration(value) {
                this.setDurationTimeout(value);
            }
        },

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
                default: false,
            },

            duration: {
                default: false,
            },

            theme: {
                default: () => {
                    return defaultTheme.alert;
                }
            }
        },

        data() {
            return {
                visible: true
            };
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
