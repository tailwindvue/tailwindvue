<template>
    <div>
        <label :class="theme.input.children.label.class"
               :for="name"
               v-text="label" />
        <!--suppress HtmlFormInputWithoutLabel -->
        <input :class="theme.input.children.label.children.input.class"
               type="text"
               :name="name"
               :value="value"
               @input="$emit('input', $event.target.value)">
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
                default: () => theme
            }
        },
    };
</script>
