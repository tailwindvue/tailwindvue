<template>
    <div :class="theme.component">
        <header :class="theme.header">
            <slot name="header" />
        </header>
        <div :class="theme.wrapper">
            <slot name="banner" />
            <div :class="theme.container">
                <aside v-if="$slots.left"
                       :class="theme.left">
                    <slot name="left" />
                </aside>
                <main :class="theme.main + ' md:block ' + mainVisibility">
                    <slot />
                </main>
                <aside v-if="$slots.right"
                       :class="theme.right">
                    <slot name="right" />
                </aside>
            </div>
        </div>
        <footer :class="theme.footer">
            <slot name="footer" />
        </footer>
    </div>
</template>

<script>
    import { TailwindVueEventBus } from '../../main';

    export default {
        name: 'App',

        props: {
            theme: {
                type: Object,
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

        mounted() {
            TailwindVueEventBus.$on('sidebarToggled', this.toggleMain);
        },

        methods: {
            toggleMain() {
                this.mainVisibility = this.mainVisibility === 'hidden' ? 'block' : 'hidden';
            }
        },
    };
</script>
