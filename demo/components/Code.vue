<template>
    <div class="container mx-auto px-4">
        <tw-code language="html"
                 caption="A code snippet">
            {{ paragraph }}
        </tw-code>
    </div>
</template>

<script>
    import Code from '../../src/components/Code';
    import { paragraph } from '../snippets';

    export default {
        components: {
            'tw-code': Code,
        },

        data() {
            return {
                paragraph,
            };
        },
    };
</script>

