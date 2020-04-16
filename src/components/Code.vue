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
    import theme from '../stubs/theme';

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
                default: () => theme.code
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
            document.querySelectorAll('pre code').forEach(block => {
                this.$nextTick(this.$highlight(block));
            });
        }
    };
</script>

