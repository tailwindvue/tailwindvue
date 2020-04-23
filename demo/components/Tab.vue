<template>
    <div class="container mx-auto px-4">
        <tw-tab name="Tab"
                active>

            <p>An Active Tab</p>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam aspernatur assumenda deserunt
                dolor, ea eaque eos esse, quidem repellendus sapiente unde! Id, quaerat quam qui tenetur unde
                voluptatibus voluptatum!
            </p>
        </tw-tab>
    </div>
</template>

<script>
    import Tab from '../../src/components/Tab';

    export default {
        components: {
            'tw-tab': Tab
        },
    };
</script>

