<template>
    <div :class="theme.panel">
        <header :class="theme.header">
            <slot name="header" />
        </header>

        <slot />
    </div>
</template>

<script>
    export default {
        name: 'Panel',

        props: {
            theme: {
                type: Object,
                default: () => {
                    return {
                        panel: '',
                        header: ''
                    };
                }
            }
        },
    };
</script>
