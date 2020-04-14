<template>
    <div is="Tabs"
         :theme="theme">
        <slot />
    </div>
</template>

<script>
    import Tabs from './Tabs';
    import theme from '../stubs/theme';

    export default {
        name: 'TabbedCodeDemo',

        components: {
            Tabs
        },

        props: {
            theme: {
                type: Object,
                default: theme.tabbedCodeDemo
            }
        },
    };
</script>
