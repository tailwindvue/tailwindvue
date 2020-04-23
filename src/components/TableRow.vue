<template>
    <tr :class="theme.tableRow.class">
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
                default: () => theme
            }
        },
    };
</script>
