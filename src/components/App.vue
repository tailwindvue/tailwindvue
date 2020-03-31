<template>
    <div :class="theme">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'App',

        props: {
            theme: {}
        },
    };
</script>
