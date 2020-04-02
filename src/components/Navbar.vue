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
            <div :class="theme.hamburger" @click="toggleSidebar">
                <slot name="hamburger">
                    <div v-if="hamburger">&times;</div>
                    <div v-else>&#9776;</div>
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
            TailwindVueEventBus.$on('toggleHamburger', this.toggleHamburger);
        },

        props: {
            theme: {}
        },

        data() {
            return {
                hamburger: false
            };
        },

        methods: {
            toggleHamburger() {
                this.hamburger = !this.hamburger;
            },

            toggleSidebar() {
                TailwindVueEventBus.$emit('toggleSidebar');
            }
        },
    };
</script>
