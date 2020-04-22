<template>
    <div>
        <div :class="theme.codeDemo.children.wrapper.class">
            <div :class="theme.codeDemo.children.wrapper.children.demo.class">
                <slot />
            </div>

            <Code
                    :theme="{code: theme.codeDemo.children.wrapper.children.code}"
                    :language="language">
                <slot name="code" />
            </Code>
        </div>
        <div :class="theme.codeDemo.children.caption.class">
            {{ caption }}
        </div>
    </div>
</template>

<script>
    import Code from './Code';
    import theme from '../stubs/theme';

    export default {
        name: 'CodeDemo',

        components: {
            Code
        },

        props: {
            language: {
                type: String,
                default: '',
                required: false
            },

            caption: {
                type: String,
                default: '',
                required: false
            },

            theme: {
                type: Object,
                default: () => theme
            }
        },
    };
</script>
