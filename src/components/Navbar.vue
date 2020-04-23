<template>
    <div :class="theme.navbar.class">
        <div :class="theme.navbar.children.wrapper.class">
            <div :class="theme.navbar.children.wrapper.children.left.class">
                <slot name="left" />
            </div>
            <div :class="theme.navbar.children.wrapper.children.middle.class">
                <slot name="middle" />
            </div>
            <div :class="theme.navbar.children.wrapper.children.right.class">
                <slot name="right" />
            </div>
            <div :class="theme.navbar.children.wrapper.children.menu.class"
                 @click="menuClicked">
                <slot name="menu">
                    &#9776;
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    // import { TailwindVueEventBus } from '../main';
    import theme from '../stubs/theme';

    export default {
        name: 'Navbar',

        props: {
            theme: {
                type: Object,
                default: () => theme
            }
        },

        data() {
            return {
                menuIcon: '&#9776;'
            };
        },

        mounted() {
            // TailwindVueEventBus.$on('sidebarToggled', this.toggleMenuIcon);
        },

        methods: {
            toggleMenuIcon() {
                this.menuIcon = this.menuIcon === '&#9776;' ? '&times;' : '&#9776;';
            },

            menuClicked() {
                // TailwindVueEventBus.$emit('menuClicked');
            }
        },
    };
</script>
