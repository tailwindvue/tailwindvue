<template>
    <div class="container mx-auto px-4">
        <tw-tabbed-code-demo>
            <tw-tab name="Green Box">
                <tw-code-demo language="html"
                              caption="A green box">

                    <div class="w-32 h-32 bg-green-500 rounded" />

                    <template #code>
                        {{ greenBox }}
                    </template>
                </tw-code-demo>
            </tw-tab>

            <tw-tab name="Blue Circle">
                <tw-code-demo language="html"
                              caption="A blue circle">

                    <div class="w-32 h-32 rounded-full bg-blue-500" />

                    <template #code>
                        {{ blueCircle }}
                    </template>
                </tw-code-demo>
            </tw-tab>
        </tw-tabbed-code-demo>
    </div>
</template>

<script>
    import TabbedCodeDemo from '../../src/components/TabbedCodeDemo';
    import CodeDemo from '../../src/components/CodeDemo';
    import Tab from '../../src/components/Tab';
    import { greenBox, blueCircle } from '../snippets';

    export default {
        components: {
            'tw-tabbed-code-demo': TabbedCodeDemo,
            'tw-tab': Tab,
            'tw-code-demo': CodeDemo
        },

        data() {
            return {
                greenBox,
                blueCircle
            };
        },
    };
</script>

