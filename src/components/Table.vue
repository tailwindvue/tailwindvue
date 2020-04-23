<template>
    <div :class="theme.table.class">

        <div v-if="showHeader"
             :class="theme.table.children.controls.class" />

        <div :class="theme.table.children.wrapper.class">

            <table :class="theme.table.children.wrapper.children.table.class">
                <thead v-if="showHeader"
                       :class="theme.table.children.wrapper.children.table.children.thead.class">
                <tr is="TableRow"
                    v-if="headings.length">
                    <th is="TableHeading"
                        v-for="heading in headings"
                        :key="heading">
                        {{ heading }}
                    </th>
                </tr>
                <slot name="header" />
                </thead>
                <tbody v-if="items.length"
                       :class="theme.table.children.wrapper.children.table.children.thead.body">
                <tr is="TableRow"
                    v-for="item in items"
                    :key="item.name">
                    <td is="TableColumn"
                        v-for="column in item"
                        :key="column"
                        :class="theme.td">
                        {{ column }}
                    </td>
                </tr>
                </tbody>
                <tbody v-else>
                <slot />
                </tbody>
            </table>

        </div>
    </div>
</template>

<script>
    import snakeCase from 'lodash.snakecase';
    import theme from '../stubs/theme';
    import TableRow from './TableRow';
    import TableColumn from './TableColumn';
    import TableHeading from './TableHeading';

    export default {
        name: 'Table',

        components: {
            TableRow,
            TableColumn,
            TableHeading
        },

        props: {
            items: {
                type: Array,
                default: () => []
            },

            showHeader: {
                type: Boolean,
                default: true
            },

            theme: {
                type: Object,
                default: () => theme
            }
        },

        computed: {
            headings() {
                if (!this.items.length) {
                    return [];
                }
                return Object.keys(this.items[0]).map(heading => snakeCase(heading).replace('_', ' '));
            },
        },
    };
</script>
