<template>
    <div :class="theme.component + ' md:block ' + visibility" @click="toggleVisibility">
        <div v-for="item in items">
            <div :is="tagType(item)" :key="item.name" :class="classes(item, 'item')" :to="item.path" :href="item.url">
                {{ item.name }}
            </div>

            <div :is="tagType(subItem)"
                 :key="subItem.name"
                 v-for="subItem in item.items"
                 :class="classes(subItem, 'subItem')"
                 :to="subItem.path">
                {{ subItem.name }}
            </div>
        </div>
    </div>
</template>

<script>
    import { TailwindVueEventBus } from '../main';

    export default {
        name: 'Sidebar',

        mounted() {
            TailwindVueEventBus.$on('menuClicked', this.toggleVisibility);
        },

        props: {
            items: {
                type: Array,
                required: true
            },

            theme: {}
        },

        data() {
            return {
                visibility: 'hidden'
            };
        },

        methods: {
            toggleVisibility() {
                this.visibility = this.visibility === 'hidden' ? 'block' : 'hidden';
                TailwindVueEventBus.$emit('sidebarToggled', this.visibility);
            },

            classes(item, name) {
                let classes = this.theme[name];

                if (this.tagType(item) !== 'div') {
                    classes += this.theme[name + 'Hovered'];
                }

                return classes;
            },

            tagType(item) {
                if (item.hasOwnProperty('path')) {
                    return 'router-link';
                }

                if (item.hasOwnProperty('url')) {
                    return 'a';
                }

                return 'div';
            }
        },
    };
</script>
