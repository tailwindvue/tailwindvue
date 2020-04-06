<template>
    <div :class="theme.component">
        <div :class="theme.headings[type]">
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Heading',

        props: {
            /**
             * @returns {String}
             */
            type: {
                default: 'h1'
            },

            /**
             * @returns {Object}
             */
            theme: {
                default: () => {
                    return {
                        headings: {
                            h1: '',
                            h2: '',
                            h3: '',
                            h4: '',
                            h5: '',
                        }
                    };
                }
            }
        },
    };
</script>
