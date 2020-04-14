<template>
    <span :class="theme.component + ' ' + theme.types[type]">{{ text }}<slot /></span>
</template>

<script>
    import theme from '../stubs/theme';

    export default {
        name: 'Badge',

        props: {
            text: {
                type: String,
                default: '',
                required: false,
            },

            type: {
                type: String,
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
                type: Object,
                default: () => theme.badge
            },
        }
    };

</script>
