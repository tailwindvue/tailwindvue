<template>
    <div :class="theme.component">
        <pre :class="theme.pre"><code :class="codeTheme"><slot /></code></pre>
        <div :class="theme.language">
            {{ language }}
        </div>
        <div :class="theme.caption">
            {{ caption }}
        </div>
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

        props: {
            code: {
                type: String,
                default: '',
                required: false
            },

            language: {
                type: String,
                default: '',
                required: false
            },

            caption: {
                type: String,
                default: '',
                required: false,
            },

            theme: {
                type: Object,
                default: () => {
                    return {
                        component: '',
                        pre: '',
                        code: ''
                    };
                }
            }
        },

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
    };
</script>

<style>
    pre {
        margin: 0 !important;
    }
</style>
