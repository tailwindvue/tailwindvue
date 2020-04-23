<template>
    <div class="container mx-auto px-4">
        <tw-link href="https://www.google.com">
            A link to google
        </tw-link>
    </div>
</template>

<script>
    import Link from '../../src/components/Link';

    export default {
        components: {
            'tw-link': Link
        },
    };
</script>

