<template>
    <div :class="theme.nav">
        <ul v-for="item in items">
            <li :class="theme.item">
                <router-link :to="item.url">
                    {{ item.label }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Nav',

        props: {
            items: {
                type: Array,
                required: true
            },

            theme: {}
        },
    };
</script>
