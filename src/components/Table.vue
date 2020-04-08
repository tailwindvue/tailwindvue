<template>
    <div :class="theme.component">
        <div v-if="showHeader" :class="theme.headerRounding"></div>
        <div :class="theme.wrapper">
            <table :class="theme.table">
                <thead v-if="showHeader" :class="theme.thead">
                <tr>
                    <th :class="theme.th" v-for="heading in headings">
                        {{ heading }}
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr :class="theme.tr" v-for="item in items">
                    <td :class="theme.td" v-for="column in item">
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
    import defaultTheme from '../stubs/defaultTheme';

    export default {
        name: 'Table',

        computed: {
            headings() {
                return Object.keys(this.items[0]).map(heading => snakeCase(heading).replace('_', ' '));
            },
        },

        props: {
            items: {
                type: Array,
                required: true
            },

            showHeader: {
                type: Boolean,
                default: true
            },

            theme: {
                default: () => {
                    return defaultTheme.Table;
                }
            }
        },
    };
</script>
