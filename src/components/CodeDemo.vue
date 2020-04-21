<template>
    <div>
        <div :class="theme.component">
            <div :class="theme.demo">
                <slot />
            </div>

            <div is="Code"
                 :theme="theme.code"
                 :language="language">
                <slot name="code" />
            </div>
        </div>
        <div :class="theme.caption">
            {{ caption }}
        </div>
    </div>
</template>

<script>
    import Code from './Code';
    import theme from '../stubs/theme.bak';

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
                default: () => theme.codeDemo
            }
        },
    };
</script>
