<template>
    <tw-tabs :theme="theme">
        <slot/>
    </tw-tabs>
</template>

<script>
    export default {
        name: 'TabbedCodeDemo',

        props: {
            theme: {
                default: () => {
                    return {
                        component: '',
                        tabs: '',
                        tab: '',
                        activeTab: '',
                        inactiveTab: ''
                    };
                }
            }
        },
    };
</script>
