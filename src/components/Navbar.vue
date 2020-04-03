<template>
    <div :class="theme.component">
        <div :class="theme.wrapper">
            <div :class="theme.left">
                <slot name="left"/>
            </div>
            <div :class="theme.middle">
                <slot name="middle"/>
            </div>
            <div :class="theme.right">
                <slot name="right"/>
            </div>
            <div :class="theme.menu" @click="menuClicked">
                <slot name="menu">
                    <div v-html="menuIcon"/>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    import { TailwindVueEventBus } from '../main';

    export default {
        name: 'Navbar',

        mounted() {
            TailwindVueEventBus.$on('sidebarToggled', this.toggleMenuIcon);
        },

        props: {
            theme: {}
        },

        data() {
            return {
                menuIcon: '&#9776;'
            };
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
