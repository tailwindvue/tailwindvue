<template>
    <tw-content class="container mx-auto px-4">
        <div class="p-10 bg-green-500">
            Any
        </div>

        <div class="p-10 bg-green-500">
            element
        </div>

        <div class="p-10 bg-green-500">
            in this component
        </div>

        <div class="p-10 bg-green-500">
            will have margin applied to the bottom
        </div>
    </tw-content>
</template>

<script>
    import Content from '../../src/components/Content';

    export default {
        components: {
            'tw-content': Content
        },
    };
</script>

