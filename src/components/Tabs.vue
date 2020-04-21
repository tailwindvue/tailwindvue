<template>
    <div :class="theme.component">
        <div :class="theme.tabs">
            <div v-for="tab in tabs"
                 :key="tab.name"
                 :class="theme.tab + ' ' + (tab.name === currentTab ? theme.activeTab : theme.inactiveTab)"
                 @click="setActive(tab)">
                {{ tab.name }}
            </div>
        </div>
        <slot />
    </div>
</template>

<script>
    import theme from '../stubs/theme.bak';

    export default {
        name: 'Tabs',

        props: {
            theme: {
                type: Object,
                default: () => theme.tabs
            }
        },

        data() {
            return {
                tabs: this.$children,
                currentTab: null
            };
        },

        mounted() {
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
