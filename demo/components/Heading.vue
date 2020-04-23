<template>
    <div class="container mx-auto px-4">
        <tw-heading>The default heading</tw-heading>

        <tw-heading>
            An h1 heading
        </tw-heading>

        <tw-heading variant="h2">
            An h2 heading
        </tw-heading>

        <tw-heading variant="h3">
            An h3 heading
        </tw-heading>

        <tw-heading variant="h4">
            An h4 heading
        </tw-heading>

        <tw-heading variant="h5">
            An h5 heading
        </tw-heading>

        <tw-heading variant="h6">
            An h6 heading
        </tw-heading>

        <tw-heading number="1">
            A numbered h1
        </tw-heading>

        <tw-heading variant="h2"
                    number="2">
            A numbered h2 heading
        </tw-heading>

        <tw-heading variant="h3"
                    number="4">
            A numbered h3 heading
        </tw-heading>

        <tw-heading variant="h4"
                    number="4">
            A numbered h4 heading
        </tw-heading>

        <tw-heading variant="h5"
                    number="5">
            A numbered h5 heading
        </tw-heading>

        <tw-heading variant="h6"
                    number="5">
            A numbered h6 heading
        </tw-heading>

        <tw-heading id="h1">
            An anchored heading
        </tw-heading>
    </div>
</template>

<script>
    import Heading from '../../src/components/Heading';

    export default {
        components: {
            'tw-heading': Heading
        },
    };
</script>

