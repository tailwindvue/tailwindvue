<template>
    <div :class="theme.component">
        <header :class="theme.header">
            <slot name="header"/>
        </header>
        <div :class="theme.wrapper">
            <div :class="theme.container">
                <aside :class="theme.sidebar">
                    <slot name="sidebar"/>
                </aside>
                <main :class="theme.main + ' md:block ' + mainVisibility">
                    <slot/>
                </main>
            </div>
        </div>
        <footer :class="theme.footer">
            <i class="fas fa-envelope fa-fw"></i>
            <a href="mailto:hello@tailwindvue.com">
                hello@tailwindvue.com
            </a>
            <span class="hidden md:inline-block">
                <i class="fas fa-hand-point-left fa-fw"></i> Why not say hello?
            </span>
        </footer>
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
                        header: '',
                        wrapper: '',
                        container: '',
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
            toggleMain() {
                this.mainVisibility = this.mainVisibility === 'hidden' ? 'block' : 'hidden';
            }
        },
    };
</script>
