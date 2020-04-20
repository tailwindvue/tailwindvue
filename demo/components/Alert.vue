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

        <tw-alert :duration="10"
                  :dismissable="true"
                  :show-progress="true"
                  :show-remaining-duration="true">
            <template #icon>
                <i class="fa fa-pencil" />
            </template>
            A self-dismissing default alert with a 10 second duration with progress and an icon
        </tw-alert>

        <tw-alert :duration="10"
                  :dismissable="true"
                  :show-progress="true"
                  :show-remaining-duration="true">
            A self-dismissing default alert with a 10 second duration with progress
        </tw-alert>

        <tw-alert :duration="10"
                  :dismissable="true"
                  :show-progress="true">
            A self-dismissing default alert with a 10 second duration with progress and remaining duration
        </tw-alert>

        <tw-alert :duration="10"
                  :dismissable="true"
                  :show-progress="true">
            A dismissable and self-dismissing default alert with a 10 second duration with progress and remaining
            duration
        </tw-alert>

        <tw-alert type="info"
                  :duration="10"
                  :show-progress="true">
            A self-dismissing info alert with a 10 second duration
        </tw-alert>

        <tw-alert type="warning"
                  :duration="10"
                  :show-progress="true">
            A self-dismissing warning alert with a 10 second duration
        </tw-alert>

        <tw-alert type="danger"
                  :duration="10"
                  :show-progress="true">
            A self-dismissing danger alert with a 10 second duration
        </tw-alert>

        <tw-alert type="success"
                  :duration="10"
                  :show-progress="true">
            A self-dismissing success alert with a 10 second duration
        </tw-alert>

        <div>
            <div v-if="isRendered"
                 class="mb-2">
                Seconds Remaining: {{ durationRemaining }}
            </div>
            <button v-else
                    class="mb-2"
                    @click="isRendered=true">
                Bring Alert Back
            </button>
            <tw-alert v-model="isRendered"
                      :duration="10"
                      @dismissed="isRendered=!isRendered"
                      @remainingDurationChanged="durationRemaining = $event">
                A self-dismissing dismissable alert with progress and controls
            </tw-alert>
        </div>

        <tw-alert :render="false">
            An un-rendered alert
        </tw-alert>

        <tw-alert :render="false"
                  :duration="10">
            An un-rendered alert with a render duration
        </tw-alert>
    </div>
</template>

<script>
    import Alert from '../../src/components/Alert';

    export default {
        components: {
            'tw-alert': Alert
        },

        data() {
            return {
                isRendered: true,
                renderDuration: 10,
                durationRemaining: 10
            };
        },
    };
</script>

<style>
    #content > * {
        margin-bottom: 20px;
    }
</style>
