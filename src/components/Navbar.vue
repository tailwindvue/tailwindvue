<template>
    <div :class="theme.component">
        <div :class="theme.wrapper">
            <div :class="theme.left">
                <slot name="left" />
            </div>
            <div :class="theme.middle">
                <slot name="middle" />
            </div>
            <div :class="theme.right">
                <slot name="right" />
            </div>
            <div :class="theme.menu"
                 @click="menuClicked">
                <slot name="menu">
                    &#9776;
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    import { TailwindVueEventBus } from '../main';
    import theme from '../stubs/theme';

    export default {
        name: 'Navbar',

        props: {
            theme: {
                type: Object,
                default: theme.navbar,
            }
        },

        data() {
            return {
                menuIcon: '&#9776;'
            };
        },

        mounted() {
            TailwindVueEventBus.$on('sidebarToggled', this.toggleMenuIcon);
        },

        methods: {
            toggleMenuIcon() {
                this.menuIcon = this.menuIcon === '&#9776;' ? '&times;' : '&#9776;';
            },

            menuClicked() {
                TailwindVueEventBus.$emit('menuClicked');
            }
        },
    };
</script>
