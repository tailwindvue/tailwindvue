<template>
    <tw-content class="container mx-auto px-4">
        <div>
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
        </div>

        <tw-badge>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aspernatur beatae commodi dolore,
            doloremque eius excepturi expedita facilis ipsa iste, molestias, odio qui quis ratione rem reprehenderit
            saepe voluptatum!
        </tw-badge>
    </tw-content>
</template>

<script>
    import Badge from '../../src/components/Badge';
    import Content from '../../src/components/Content';

    export default {
        components: {
            'tw-badge': Badge,
            'tw-content': Content
        },
    };
</script>

