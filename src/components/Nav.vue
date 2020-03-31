<template>
    <div :class="theme.nav">

    </div>
</template>

<script>
    export default {
        name: 'Nav',

        props: {
            items: {
                type: Object,
                required: true
            },

            theme: {}
        },
    };
</script>
