<template>
    <div v-if="isRendered"
         :class="[theme.alert.class, theme.alert.variants[variant]]">
        <div v-if="showProgress && duration && remainingDuration"
             :class="theme.alert.children.progress.class">
            <div :class="[
                    theme.alert.children.progress.children.progressBar.class,
                    theme.alert.children.progress.children.progressBar.variants[variant],
                 ]"
                 :style="remainingDurationStyle" />
        </div>
        <div v-if="$slots.icon"
             :class="theme.alert.children.icon.class">
            <slot name="icon" />
        </div>
        <div :class="theme.alert.children.body.class">
            <slot />
        </div>
        <div v-if="showRemainingDuration && remainingDuration"
             :class="theme.alert.children.remainingDuration.class">
            {{ Math.ceil(remainingDuration) }}s
        </div>
        <button v-if="dismissable"
                :class="theme.alert.children.dismissButton.class"
                @click="dismissAlert">
            <slot name="action">
                &times;
            </slot>
        </button>
    </div>
</template>

<script>
    import theme from '../stubs/theme';

    export default {
        name: 'Alert',

        model: {
            prop: 'render',
            event: 'dismissed'
        },

        props: {
            variant: {
                type: String,
                default: 'default',
                required: false,
                validator: type => {
                    return [
                        'default',
                        'info',
                        'warning',
                        'danger',
                        'success'
                    ].includes(type);
                }
            },

            render: {
                type: Boolean,
                default: true,
                required: false,
            },

            duration: {
                type: Number,
                default: undefined,
                required: false,
                validator: duration => {
                    return duration >= 0;
                }
            },

            dismissable: {
                type: Boolean,
                default: false,
                required: false,
            },

            showRemainingDuration: {
                type: Boolean,
                default: false,
                required: false,
            },

            showProgress: {
                type: Boolean,
                default: false,
                required: false,
            },

            theme: {
                type: Object,
                default: () => theme,
                required: false
            }
        },

        data() {
            return {
                timeout: null,
                interval: null,
                isRendered: this.render,
                remainingDuration: this.duration,
            };
        },

        computed: {
            remainingDurationPercentage() {
                return this.remainingDuration / this.duration * 100;
            },

            remainingDurationStyle() {
                return `width: ${this.remainingDurationPercentage}%;`;
            }
        },

        watch: {
            render(value) {
                this.isRendered = value;

                if (value === true) {
                    this.remainingDuration = this.duration;
                    this.dismissAlertAfterSeconds(this.duration);
                    this.$emit('remainingDurationChanged', this.remainingDuration);
                }
            },

            duration(seconds) {
                if (this.render && this.duration) {
                    clearTimeout(this.timeout);
                    clearInterval(this.interval);
                    this.dismissAlertAfterSeconds(seconds);
                }
            }
        },

        mounted() {
            if (this.render && this.duration) {
                this.dismissAlertAfterSeconds(this.duration);
            }
        },

        methods: {
            dismissAlert() {
                this.isRendered = !this.isRendered;
                clearInterval(this.interval);
                clearTimeout(this.timeout);
                this.$emit('dismissed', this);
            },

            dismissAlertAfterSeconds(seconds) {
                this.interval = setInterval(() => {
                    this.$emit('remainingDurationChanged', Math.ceil(this.remainingDuration -= 1.1));
                }, 1000);

                this.timeout = setTimeout(() => this.dismissAlert(), seconds * 1000);
            }
        },
    };
</script>
