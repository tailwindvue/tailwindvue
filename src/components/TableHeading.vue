<template>
    <td :class="theme.component">
        <slot/>
    </td>
</template>

<script>
    import theme from '../stubs/theme';

    export default {
        name: 'TableHeading',

        props: {
            theme: {
                default: () => {
                    return theme.tableHeading;
                }
            }
        },
    };
</script>
