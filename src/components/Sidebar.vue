<template>
    <div :class="theme.component + ' md:block ' + visibility"
         @click="toggleVisibility">
        <slot />
    </div>
</template>

<script>
    import { TailwindVueEventBus } from '../main';
    import theme from '../stubs/theme';

    export default {
        name: 'Sidebar',

        props: {
            theme: {
                type: Object,
                default: () => theme.sidebar
            }
        },

        data() {
            return {
                visibility: 'hidden'
            };
        },

        mounted() {
            TailwindVueEventBus.$on('menuClicked', this.toggleVisibility);
        },

        methods: {
            toggleVisibility() {
                this.visibility = this.visibility === 'hidden' ? 'block' : 'hidden';
                TailwindVueEventBus.$emit('sidebarToggled', this.visibility);
            },

            classes(item, name) {
                let classes = this.theme[name];

                if (this.tagType(item) !== 'div') {
                    classes += this.theme[name + 'Hovered'];
                }

                return classes;
            },

            tagType(item) {
                if (Object.prototype.hasOwnProperty.call(item, 'path')) {
                    return 'router-link';
                }

                if (Object.prototype.hasOwnProperty.call(item, 'url')) {
                    return 'a';
                }

                return 'div';
            }
        },
    };
</script>
