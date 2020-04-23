<template>
    <div is="Tabs"
         class="theme.tabbedCodeDemo.class"
         :theme="{tabs: theme.tabbedCodeDemo.children.tabs}">
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
                default: () => theme
            }
        },
    };
</script>
