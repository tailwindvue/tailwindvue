<template>
    <div :class="theme.component">
        <slot/>
    </div>
</template>

<script>
    import theme from '../stubs/theme';

    export default {
        name: 'Content',

        props: {
            theme: {
                default: () => {
                    return theme.content;
                }
            }
        },
    };
</script>
