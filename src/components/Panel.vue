<template>
    <div :class="theme.panel">
        <header :class="theme.header">
            <slot name="header" />
        </header>

        <slot />
    </div>
</template>

<script>
    import theme from '../stubs/theme';

    export default {
        name: 'Panel',

        props: {
            theme: {
                type: Object,
                default: () => theme.panel
            }
        },
    };
</script>
