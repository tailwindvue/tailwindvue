<template>
    <div v-show="active">
        <slot />
    </div>
</template>

<script>
    import theme from '../stubs/theme';

    export default {
        name: 'Tab',

        props: {
            name: {
                type: String,
                required: true
            },

            theme: {
                type: Object,
                default: () => theme.tab
            }
        },

        data() {
            return {
                active: false
            };
        },

        mounted() {
            if (this.$el.hasAttribute('active')) {
                this.active = true;
            }
        },
    };
</script>
