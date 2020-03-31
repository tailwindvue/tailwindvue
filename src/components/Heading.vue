<template>
    <div :class="theme[type]">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'Heading',

        props: {
            type: {
                default: 'h1'
            },

            theme: {}
        },
    };
</script>
