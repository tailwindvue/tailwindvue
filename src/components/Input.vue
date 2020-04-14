<template>
    <div>
        <label :class="theme.label"
               :for="name"
               v-text="label">
            <input :class="theme.input"
                   type="text"
                   :name="name"
                   :value="value"
                   @input="$emit('input', $event.target.value)">
        </label>
    </div>
</template>

<script>
    import theme from '../stubs/theme';

    export default {
        name: 'Input',

        props: {
            value: {
                type: String,
                required: true,
            },

            name: {
                type: String,
                required: true,
            },

            label: {
                type: String,
                default: '',
                required: false,
            },

            theme: {
                type: Object,
                default: theme.input
            }
        },
    };
</script>
