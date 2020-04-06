<template>
    <div>
        <div :class="theme.component">
            <div :class="theme.demo">
                <slot/>
            </div>

            <tw-code :theme="theme.code" :language="language">
                <slot name="code"/>
            </tw-code>
        </div>
        <div :class="theme.caption">
            {{ caption }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CodeDemo',

        props: {
            language: {
                type: String,
            },

            caption: {
                type: String,
            },

            theme: {
                default: () => {
                    return {
                        component: '',
                    };
                }
            }
        },
    };
</script>
