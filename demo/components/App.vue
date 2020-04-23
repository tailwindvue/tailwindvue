<template>
    <div>
        <tw-app>
            <template #header>
                Header
            </template>

            <template #banner>
                Banner
            </template>

            <template #left>
                Left
            </template>

            Default

            <template #right>
                Right
            </template>

            <template #footer>
                Footer
            </template>

        </tw-app>
    </div>
</template>

<script>
    import App from '../../src/components/App';

    export default {
        components: {
            'tw-app': App
        },
    };
</script>

