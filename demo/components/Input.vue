<template>
    <div>
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

