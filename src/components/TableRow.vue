<template>
    <tr :class="theme.component">
        <slot />
    </tr>
</template>

<script>
    import theme from '../stubs/theme';

    export default {
        name: 'TableRow',

        props: {
            theme: {
                type: Object,
                default: () => theme.tableRow
            }
        },
    };
</script>
