<template>
    <div :class="theme.component">
        <div :class="theme.tabs">
            <div :class="theme.tab + ' ' + (tab.name === currentTab ? theme.activeTab : theme.inactiveTab)"
                 v-for="tab in tabs"
                 @click="setActive(tab)">
                {{ tab.name }}
            </div>
        </div>
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'Tabs',

        mounted() {
            this.setActive(this.getActiveTab() ? this.getActiveTab() : this.tabs[0]);
        },

        props: {
            theme: {
                default: () => {
                    return {
                        component: '',
                        tabs: '',
                        tab: '',
                        activeTab: '',
                        inactiveTab: ''
                    };
                }
            }
        },

        data() {
            return {
                tabs: this.$children,
                currentTab: null
            };
        },

        methods: {
            setActive(tab) {
                this.tabs.forEach(tab => tab.$data.active = false);
                this.currentTab = tab.name;
                tab.$data.active = true;
            },

            getActiveTab() {
                return this.tabs.find(tab => tab.hasOwnProperty('active') && tab.active);
            }
        },
    };
</script>
