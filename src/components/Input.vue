<template>
    <div>
        <label :class="theme.label" :for="name" v-text="label"/>
        <input :class="theme.input"
               type="text"
               :name="name"
               :value="value"
               @input="$emit('input', $event.target.value)">
    </div>
</template>

<script>
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
            },

            theme: {}
        },
    };
</script>
