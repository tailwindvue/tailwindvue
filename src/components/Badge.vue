<template>
    <span :class="[theme.badge.class, theme.badge.variants[variant]]">{{ text }}<slot /></span>
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

            variant: {
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
                default: () => theme
            },
        },
    };

</script>
