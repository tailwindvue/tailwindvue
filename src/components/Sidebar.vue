<template>
    <div>
        <slot />
    </div>
</template>

<script>
    import theme from '../stubs/theme';

    export default {
        name: 'Sidebar',

        props: {
            theme: {
                type: Object,
                default: () => theme.sidebar
            }
        },

        data() {
            return {
                visibility: 'hidden'
            };
        },
    };
</script>
