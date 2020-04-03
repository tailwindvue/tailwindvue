<template>
    <div :class="theme.component">
        <div :class="theme.navbar">
            <slot name="navbar"/>
        </div>
        <div :class="theme.wrapper">
            <div :class="theme.sidebar">
                <slot name="sidebar"/>
            </div>
            <div :class="theme.main + ' md:block ' + mainVisibility">
                <slot/>
            </div>
        </div>
        <div :class="theme.footer">
            <i class="fas fa-envelope fa-fw"></i>
            <a href="mailto:hello@tailwindvue.com">
                hello@tailwindvue.com
            </a>
            <span class="hidden md:inline-block">
                <i class="fas fa-hand-point-left fa-fw"></i> Why not say hello?
            </span>
        </div>
    </div>
</template>

<script>
    import { TailwindVueEventBus } from '../../main';

    export default {
        name: 'App',

        mounted() {
            TailwindVueEventBus.$on('sidebarToggled', this.toggleMain);
        },

        props: {
            theme: {
                default: () => {
                    return {
                        component: '',
                        navbar: '',
                        wrapper: '',
                        sidebar: '',
                        main: ''
                    };
                }
            },
        },

        data() {
            return {
                mainVisibility: 'visible'
            };
        },

        methods: {
            toggleMain(visibility) {
                this.mainVisibility = this.mainVisibility === 'hidden' ? 'block' : 'hidden';
            }
        },
    };
</script>
