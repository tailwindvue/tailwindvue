<template>
    <div :class="theme.content.class">
        <slot />
    </div>
</template>

<script>
    import theme from '../stubs/theme';

    export default {
        name: 'Content',

        props: {
            theme: {
                type: Object,
                default: () => theme
            }
        },
    };
</script>
