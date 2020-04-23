<template>
    <td :class="theme.tableHeading.class">
        <slot />
    </td>
</template>

<script>
    import theme from '../stubs/theme';

    export default {
        name: 'TableHeading',

        props: {
            theme: {
                type: Object,
                default: () => theme
            }
        },
    };
</script>
