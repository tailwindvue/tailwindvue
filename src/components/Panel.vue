<template>
    <div :class="theme.panel.class">
        <header :class="theme.panel.children.header.class">
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
                default: () => theme
            }
        },
    };
</script>
