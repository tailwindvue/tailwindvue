<template>
    <div :class="theme.component">
        <div :is="type" :class="theme.headings[type]">
            {{ text }}
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Heading',

        props: {
            /** @returns {String} */
            type: {
                default: 'h1',
                type: String
            },

            /** @returns {String} */
            text: {
                type: String
            },

            /** @returns {Object} */
            theme: {
                default: () => {
                    return {
                        headings: {
                            h1: '',
                            h2: '',
                            h3: '',
                            h4: '',
                            h5: '',
                            h6: '',
                        }
                    };
                }
            }
        },
    };
</script>
