<template>
    <td :class="theme.component">
        <slot/>
    </td>
</template>

<script>
    import theme from '../stubs/theme';

    export default {
        name: 'TableColumn',

        props: {
            theme: {
                default: () => {
                    return theme.tableColumn;
                }
            }
        },
    };
</script>
