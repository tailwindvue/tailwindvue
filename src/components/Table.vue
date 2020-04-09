<template>
    <div :class="theme.component">
        <div v-if="showHeader" :class="theme.headerRounding"></div>
        <div :class="theme.wrapper">
            <table :class="theme.table">
                <thead v-if="showHeader" :class="theme.thead">
                <tr v-if="items.length" is="TableRow">
                    <th is="TableHeading" v-for="heading in headings">
                        {{ heading }}
                    </th>
                </tr>
                <slot name="header"/>
                </thead>
                <tbody :class="theme.tbody">
                <slot/>
                <tr is="TableRow" v-if="items.length" v-for="item in items">
                    <td is="TableColumn" :class="theme.td" v-for="column in item">
                        {{ column }}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { snakeCase } from 'lodash';
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

        computed: {
            headings() {
                if (!this.items.length) {
                    return [];
                }
                return Object.keys(this.items[0]).map(heading => snakeCase(heading).replace('_', ' '));
            },
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
                default: () => {
                    return theme.table;
                }
            }
        },
    };
</script>
