<template>
    <div :class="theme.panel">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'Panel',

        props: {
            theme: {}
        },
    };
</script>
