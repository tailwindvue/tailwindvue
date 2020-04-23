<template>
    <div :class="theme.code.class">
        <pre :class="theme.code.children.pre.class"><code :class="[
            theme.code.children.pre.children.code.class,
            `language-${language}`
        ]"><slot />{{ code }}</code></pre>
        <div :class="theme.code.children.language.class">
            {{ language }}
        </div>
        <div :class="theme.code.children.caption.class">
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
                default: () => theme
            }
        },

        created() {
            if (this.$slots.default) {
                this.$slots.default[0].text = this.$slots.default[0].text.trim();
            }

            if (this.code) {
                this.code = this.code.trim();
            }
        },

        mounted() {
            if (!this.$highlight) {
                return;
            }
            document.querySelectorAll('pre code').forEach(block => {
                this.$nextTick(this.$highlight(block));
            });
        }
    };
</script>

