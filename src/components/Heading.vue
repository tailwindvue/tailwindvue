<template>
    <div :id="id"
         :class="theme.component + (this.isHovered ? theme.hovered : '')"
         @click="goToHeader">
        <span :is="type" :class="theme.headings[type]"
             @mouseenter="toggleIsHovered"
             @mouseleave="toggleIsHovered">
            {{ text }}
            <slot/>
            <span v-if="isHovered" :class="theme.anchor">#</span>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'Heading',

        props: {
            id: {
                type: String
            },

            /** @returns {String} */
            type: {
                default: 'h1',
                type: String
            },

            /** @returns {String} */
            text: {
                type: String
            },

            /** @returns {Object} */
            theme: {
                default: () => {
                    return {
                        headings: {
                            h1: '',
                            h2: '',
                            h3: '',
                            h4: '',
                            h5: '',
                            h6: '',
                        }
                    };
                }
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
