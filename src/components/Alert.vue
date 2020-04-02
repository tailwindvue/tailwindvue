<template>
    <div v-if="visible" :class="theme.component + ' ' + theme.types[type]">
        <div v-if="$slots.icon" :class="theme.icon">
            <slot name="icon"/>
        </div>
        <div :class="theme.body">
            <slot/>
        </div>
        <div v-if="dismissable" :class="theme.action" @click="dismiss">
            &times;
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Alert',

        watch: {
            duration(value) {
                setTimeout(() => this.dismiss(), value * 1000);
            }
        },

        props: {
            type: {
                default: 'default',
            },

            dismissable: {
                default: false,
            },

            duration: {
                default: false,
            },

            theme: {
                default: () => {
                    return {
                        component: '',
                        icon: ''
                    };
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
        },
    };
</script>
