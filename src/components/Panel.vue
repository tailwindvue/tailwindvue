<template>
    <div :class="theme.panel">
        <header :class="theme.header">
            <slot name="header"/>
        </header>

        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'Panel',

        props: {
            theme: {
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
