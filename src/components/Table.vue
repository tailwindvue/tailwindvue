<template>
    <div :class="theme.component">

        <div v-if="showHeader"
             :class="theme.headerRounding" />

        <div :class="theme.wrapper">

            <table :class="theme.table">
                <thead v-if="showHeader"
                       :class="theme.thead">
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
                       :class="theme.tbody">
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
                default: () => theme.table
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
