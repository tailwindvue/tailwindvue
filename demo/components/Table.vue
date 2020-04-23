<template>
    <div class="container mx-auto px-4">
        <tw-table>
            <template #header>
                <tw-table-row>
                    <tw-table-heading>Jane</tw-table-heading>
                    <tw-table-heading>Bennett</tw-table-heading>
                    <tw-table-heading>Age</tw-table-heading>
                </tw-table-row>
            </template>

            <tw-table-row>
                <tw-table-column>Jane</tw-table-column>
                <tw-table-column>Bennett</tw-table-column>
                <tw-table-column>36</tw-table-column>
            </tw-table-row>

            <tw-table-row>
                <tw-table-column>John</tw-table-column>
                <tw-table-column>Smith</tw-table-column>
                <tw-table-column>43</tw-table-column>
            </tw-table-row>
        </tw-table>
    </div>
</template>

<script>
    import Table from '../../src/components/Table';
    import TableRow from '../../src/components/TableRow';
    import TableColumn from '../../src/components/TableColumn';
    import TableHeading from '../../src/components/TableHeading';

    export default {
        components: {
            'tw-table': Table,
            'tw-table-row': TableRow,
            'tw-table-column': TableColumn,
            'tw-table-heading': TableHeading,
        },
    };
</script>

