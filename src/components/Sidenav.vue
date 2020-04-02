<template>
    <div :class="theme.sidenav">
        <div v-for="item in items">
            <router-link :class="theme.item + ' ' + theme.itemHovered" v-if="item.routerLink" :to="item.routerLink">
                {{ item.label }}
            </router-link>

            <a :class="theme.item + ' ' + theme.itemHovered" v-if="item.url" :href="item.url">
                {{ item.label }}
            </a>

            <div :class="theme.item" v-if="!item.url && !item.routerLink">
                {{ item.label }}
            </div>

            <div v-for="subItem in item.items">
                <router-link :class="theme.subItem + ' ' + theme.subItemHovered" v-if="subItem.routerLink" :to="subItem.routerLink">
                    {{ subItem.label }}
                </router-link>

                <a :class="theme.subItem + ' ' + theme.subItemHovered" v-if="subItem.url" :href="subItem.url">
                    {{ subItem.label }}
                </a>

                <div :class="theme.subItem" v-if="!subItem.url && !subItem.routerLink">
                    {{ subItem.label }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Sidenav',

        props: {
            items: {
                type: Array,
                required: true
            },

            theme: {}
        },
    };
</script>
