<template>
    <div class="container mx-auto px-4">
        <tw-code-demo language="html"
                      caption="A code-demo">

            <div class="w-32 h-32 rounded-full bg-blue-500" />

            <template #code>
                {{ blueCircle }}
            </template>
        </tw-code-demo>
    </div>
</template>

<script>
    import CodeDemo from '../../src/components/CodeDemo';
    import { blueCircle } from '../snippets';

    export default {
        components: {
            'tw-code-demo': CodeDemo,
        },

        data() {
            return {
                blueCircle
            };
        },
    };
</script>

