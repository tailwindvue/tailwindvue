<template>
    <div :id="id"
         :class="[theme.heading.class, theme.heading.variants[variant]]"
         @click="goToHeader"
         @mouseenter="toggleIsHovered"
         @mouseleave="toggleIsHovered">
        <span v-if="number"
              :class="theme.heading.children.number.class">
            {{ number }}
        </span>

        <span :is="variant">{{ text }}<slot /></span>

        <span v-if="id && isHovered"
              :class="theme.heading.children.anchor.class">
            &num;
        </span>
    </div>
</template>

<script>
    import theme from '../stubs/theme';

    export default {
        name: 'Heading',

        props: {
            id: {
                type: String,
                default: '',
                required: false
            },

            variant: {
                type: String,
                default: 'h1'
            },

            text: {
                type: String,
                default: '',
                required: false
            },

            number: {
                type: String,
                default: '',
                required: false,
            },

            theme: {
                type: Object,
                default: () => theme
            }
        },

        data() {
            return {
                isHovered: false
            };
        },

        methods: {
            toggleIsHovered() {
                if (!this.id) {
                    return;
                }

                this.isHovered = !this.isHovered;
            },
            goToHeader() {
                if (!this.id) {
                    return;
                }
                this.$router.push({ path: '#' + this.id });
            }
        },
    };
</script>
