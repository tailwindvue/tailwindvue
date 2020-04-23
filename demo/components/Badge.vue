<template>
    <div class="container mx-auto px-4">
        <tw-badge>
            Default
        </tw-badge>

        <tw-badge class="ml-2"
                  variant="info">
            Info
        </tw-badge>

        <tw-badge class="ml-2"
                  variant="warning">
            Warning
        </tw-badge>

        <tw-badge class="ml-2"
                  variant="danger">
            Danger
        </tw-badge>

        <tw-badge class="ml-2"
                  variant="success">
            Success
        </tw-badge>

        <tw-badge class="ml-2">
            10
        </tw-badge>

        <tw-badge>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aspernatur beatae commodi dolore,
            doloremque eius excepturi expedita facilis ipsa iste, molestias, odio qui quis ratione rem reprehenderit
            saepe voluptatum!
        </tw-badge>
    </div>
</template>

<script>
    import Badge from '../../src/components/Badge';

    export default {
        components: {
            'tw-badge': Badge
        },
    };
</script>

