<template>
    <span :class="theme.component + ' ' + theme.types[type]">{{ text }}<slot/></span>
</template>

<script>
    import defaultTheme from '../stubs/theme';

    export default {
        name: 'Badge',

        props: {
            text: {
                type: String,
            },

            type: {
                default: 'default',
                validator: value => {
                    return [
                        'default',
                        'info',
                        'warning',
                        'danger',
                        'success'
                    ].includes(value);
                }
            },

            theme: {
                default: () => {
                    return defaultTheme.Badge;
                }
            },
        }
    };

</script>
