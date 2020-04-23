<template>
    <div class="container mx-auto px-4">
        <tw-table-column>
            A table column
        </tw-table-column>
    </div>
</template>

<script>
    import TableColumn from '../../src/components/TableColumn';

    export default {
        components: {
            'tw-table-column': TableColumn,
        },
    };
</script>

