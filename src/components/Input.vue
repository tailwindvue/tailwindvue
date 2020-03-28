<template>
    <div>
        <label :for="name" v-text="label"/>
        <input class="border w-full p-2 rounded-md" type="text" :name="name" :value="value" @input="$emit('input', $event.target.value)">
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
            }
        },
    };
</script>
