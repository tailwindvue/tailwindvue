<template>
    <div :class="theme.component">
        <pre :class="theme.pre"><code :class="codeTheme"><slot/></code></pre>
        <div :class="theme.language">{{ language }}</div>
        <div :class="theme.caption">{{ caption }}</div>
    </div>
</template>

<script>
    import Prism from 'prismjs';

    Prism.plugins.NormalizeWhitespace.setDefaults({
        'remove-trailing': true,
        'remove-indent': true,
        'left-trim': true,
        'right-trim': true,
    });

    export default {
        name: 'Code',

        computed: {
            codeTheme() {
                if (this.language === 'vuejs') {
                    return `${this.theme.code} language-html`;
                }

                return `${this.theme.code} language-${this.language}`;
            }
        },

        mounted() {
            this.$el.querySelectorAll('pre code').forEach(block => {
                Prism.highlightElement(block);
            });
        },

        props: {
            code: {
                type: String
            },

            language: {},

            caption: {},

            theme: {
                default: () => {
                    return {
                        component: '',
                        pre: '',
                        code: ''
                    };
                }
            }
        },
    };
</script>

<style>
    pre {
        margin: 0 !important;
    }
</style>
