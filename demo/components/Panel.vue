<template>
    <tw-content class="container mx-auto px-4">
        <tw-panel>
            A Panel
        </tw-panel>

        <tw-panel>
            <template #header>
                Header
            </template>
            A Panel with a header
        </tw-panel>
    </tw-content>
</template>

<script>
    import Panel from '../../src/components/Panel';
    import Content from '../../src/components/Content';

    export default {
        components: {
            'tw-panel': Panel,
            'tw-content': Content
        },
    };
</script>

