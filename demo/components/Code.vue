<template>
    <div>
        <tw-code language="html"
                 caption="A code snippet">
            {{ code }}
        </tw-code>
    </div>
</template>

<script>
    import Code from '../../src/components/Code';
    import { code } from '../snippets/code';

    export default {
        components: {
            'tw-code': Code,
        },

        data() {
            return {
                code,
            };
        },
    };
</script>

