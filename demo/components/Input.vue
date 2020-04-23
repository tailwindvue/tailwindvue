<template>
    <div class="container mx-auto px-4">
        <tw-input name="input"
                  label="Input"
                  value="An input field" />
    </div>
</template>

<script>
    import Input from '../../src/components/Input';

    export default {
        components: {
            'tw-input': Input
        },
    };
</script>

