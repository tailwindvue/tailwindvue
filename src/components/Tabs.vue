<template>
    <div :class="theme.tabs.class">
        <div :class="theme.tabs.children.tabs.class">
            <div v-for="tab in tabs"
                 :key="tab.name"
                 :class="{
                     [theme.tabs.children.tabs.children.tab.class]: true,
                     [theme.tabs.children.tabs.children.tab.variants.active]: tab.name === currentTab,
                     [theme.tabs.children.tabs.children.tab.variants.inactive]: tab.name !== currentTab
                 }"
                 @click="setActive(tab)">
                {{ tab.name }}
            </div>
        </div>
        <slot />
    </div>
</template>

<script>
    import theme from '../stubs/theme';

    export default {
        name: 'Tabs',

        props: {
            theme: {
                type: Object,
                default: () => theme
            }
        },

        data() {
            return {
                tabs: this.$children,
                currentTab: null
            };
        },

        mounted() {
            if (!this.tabs.length) {
                return console.warn('You must have at least one child tab in a tabs component.');
            }

            this.setActive(this.getActiveTab() ? this.getActiveTab() : this.tabs[0]);
        },

        methods: {
            setActive(tab) {
                this.tabs.forEach(tab => tab.$data.active = false);
                this.currentTab = tab.name;
                tab.$data.active = true;
            },

            getActiveTab() {
                return this.tabs.find(tab => Object.prototype.hasOwnProperty.call(tab, 'active') && tab.active);
            }
        },
    };
</script>
