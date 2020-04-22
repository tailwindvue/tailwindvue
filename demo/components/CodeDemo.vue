<template>
    <div>
        <tw-code-demo language="html"
                      caption="A code-demo">
            <div>
                <p>
                    Some Code Here
                </p>
            </div>

            <template #code>
                {{ code }}
            </template>
        </tw-code-demo>
    </div>
</template>

<script>
    import CodeDemo from '../../src/components/CodeDemo';
    import { code } from '../snippets/code';

    export default {
        components: {
            'tw-code-demo': CodeDemo,
        },

        data() {
            return {
                code,
            };
        },
    };
</script>

