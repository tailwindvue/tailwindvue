<template>
    <div :is="is"
         :to="to"
         :href="href"
         :class="theme.component">
        <slot />
    </div>
</template>

<script>
    import theme from '../stubs/theme';

    export default {
        name: 'Link',

        props: {
            theme: {
                type: Object,
                default: theme.link
            },

            to: {
                type: String,
                default: '',
                required: false,
            },

            href: {
                type: String,
                default: '',
                required: false,
            }
        },

        computed: {
            is() {
                if (this.to) {
                    return 'router-link';
                }

                if (this.href) {
                    return 'a';
                }

                return 'div';
            }
        }
    };
</script>

