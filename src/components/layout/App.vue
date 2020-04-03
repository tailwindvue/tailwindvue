<template>
    <div :class="theme.component">
        <div :class="theme.navbar">
            <slot name="navbar"/>
        </div>
        <div class="">
            <div :class="theme.wrapper">
                <div :class="theme.sidebar">
                    <slot name="sidebar"/>
                </div>
                <div :class="theme.main + ' md:block ' + mainVisibility">
                    <slot/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { TailwindVueEventBus } from '../../main';

    export default {
        name: 'App',

        mounted() {
            TailwindVueEventBus.$on('menuClicked', this.toggleMain);
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
            toggleMain() {
                this.mainVisibility = this.mainVisibility === 'hidden' ? 'block' : 'hidden';
            }
        },
    };
</script>
