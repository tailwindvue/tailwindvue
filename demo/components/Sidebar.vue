<template>
    <div class="container mx-auto px-4">
        <tw-sidebar>
            A Sidebar
        </tw-sidebar>
    </div>
</template>

<script>
    import Sidebar from '../../src/components/Sidebar';

    export default {
        components: {
            'tw-sidebar': Sidebar
        },
    };
</script>

