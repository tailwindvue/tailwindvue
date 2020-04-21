<template>
    <div :id="id"
         :class="theme.component + ' ' + theme.headings[type] + ' ' + (id ? theme.hovered : '')"
         @click="goToHeader">
        <span v-if="number"
              :class="theme.number">
            {{ number }}
        </span>

        <span :is="type">{{ text }}<slot /></span>

        <span v-if="id"
              :class="theme.anchor">
            &num;
        </span>
    </div>
</template>

<script>
    import theme from '../stubs/theme.bak';

    export default {
        name: 'Heading',

        props: {
            id: {
                type: String,
                default: '',
                required: false
            },

            type: {
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
                default: () => theme.heading
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
