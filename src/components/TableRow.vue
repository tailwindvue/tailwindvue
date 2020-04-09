<template>
    <tr :class="theme.component">
        <slot/>
    </tr>
</template>

<script>
    import theme from '../stubs/theme';

    export default {
        name: 'TableRow',

        props: {
            theme: {
                default: () => {
                    return theme.tableRow;
                }
            }
        },
    };
</script>
