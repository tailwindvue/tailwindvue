<template>
    <div class="container mx-auto px-4">
        <tw-panel>
            A Panel
        </tw-panel>

        <tw-panel>
            <template #header>
                Header
            </template>
            A Panel with a header
        </tw-panel>
    </div>
</template>

<script>
    import Panel from '../../src/components/Panel';

    export default {
        components: {
            'tw-panel': Panel
        },
    };
</script>

