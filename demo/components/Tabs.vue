<template>
    <div class="container mx-auto px-4">
        <tw-tabs>
            <tw-tab name="One">
                Content for the first tab.
            </tw-tab>
            <tw-tab name="Two">
                Content for the second tab.
            </tw-tab>
            <tw-tab name="Three">
                Content for the third tab.
            </tw-tab>
        </tw-tabs>
    </div>
</template>

<script>
    import Tabs from '../../src/components/Tabs';
    import Tab from '../../src/components/Tab';

    export default {
        components: {
            'tw-tabs': Tabs,
            'tw-tab': Tab
        },
    };
</script>

