<template>
    <div :class="theme.app.class">
        <header :class="theme.app.children.header.class">
            <slot name="header" />
        </header>
        <div :class="theme.app.children.wrapper.class">
            <div :class="theme.app.children.wrapper.children.banner.class">
                <slot name="banner" />
            </div>
            <div :class="theme.app.children.wrapper.children.container.class">
                <aside v-if="$slots.left"
                       :class="theme.app.children.wrapper.children.container.children.left.class">
                    <slot name="left" />
                </aside>
                <main :class="theme.app.children.wrapper.children.container.children.main.class + ' md:block ' + mainVisibility">
                    <slot />
                </main>
                <aside v-if="$slots.right"
                       :class="theme.app.children.wrapper.children.container.children.right.class">
                    <slot name="right" />
                </aside>
            </div>
        </div>
        <footer :class="theme.app.children.footer.class">
            <slot name="footer" />
        </footer>
    </div>
</template>

<script>
    import theme from '../stubs/theme';

    export default {
        name: 'App',

        props: {
            theme: {
                type: Object,
                default: () => theme
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
