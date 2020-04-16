<template>
    <div id="content">
        <h1 class="text-3xl">
            Alert
        </h1>

        <tw-alert>An alert</tw-alert>

        <tw-alert type="info">
            An info alert
        </tw-alert>

        <tw-alert type="warning">
            A warning alert
        </tw-alert>

        <tw-alert type="danger">
            A danger alert
        </tw-alert>

        <tw-alert type="success">
            A success alert
        </tw-alert>

        <tw-alert type="info">
            <template #icon>
                <i class="fa fa-pencil" />
            </template>

            An alert with an icon
        </tw-alert>

        <tw-alert :dismissable="true">
            A dismissable alert
        </tw-alert>

        <tw-alert :duration="2">
            A self dismissing alert
        </tw-alert>
    </div>
</template>

<script>
    import Alert from '../../src/components/Alert';

    export default {
        components: {
            'tw-alert': Alert
        },
    };
</script>

<style>
    #content > * {
        margin-bottom: 20px;
    }
</style>
