<template>
    <div :class="theme.component">
        <slot />
    </div>
</template>

<script>
    import theme from '../stubs/theme.bak';

    export default {
        name: 'Content',

        props: {
            theme: {
                type: Object,
                default: () => theme.content
            }
        },
    };
</script>
