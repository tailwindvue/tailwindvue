<template>
    <div v-show="active">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'Tab',

        mounted() {
            if (this.$el.hasAttribute('active')) {
                this.active = true;
            }
        },

        props: {
            name: {
                type: String,
                required: true
            },

            theme: {
                default: () => {
                    return {};
                }
            }
        },

        data() {
            return {
                active: false
            };
        },
    };
</script>
