<template>
    <div class="">
        <tw-navbar>
            <template #left>
                Left
            </template>

            <template #middle>
                Middle
            </template>

            <template #right>
                Right
            </template>
        </tw-navbar>
    </div>
</template>

<script>
    import Navbar from '../../src/components/Navbar';

    export default {
        components: {
            'tw-navbar': Navbar
        },
    };
</script>

