<template>
    <div :class="theme.component">
        <div :class="theme.navbar">
            <slot name="navbar"/>
        </div>
        <div class="">
            <div :class="theme.wrapper">
                <div :class="theme.sidebar">
                    <slot name="sidebar"/>
                </div>
                <div :class="theme.main">
                    <slot/>
                </div>
            </div>
        </div>
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
