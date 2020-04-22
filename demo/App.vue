<template>
    <div>
        <div class="relative">
            <label for="component" />
            <select id="component"
                    v-model="component"
                    name="component"
                    class="block appearance-none w-full bg-white border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 mb-4"
                    @change="setQuery">
                <option v-for="option in options"
                        :key="option"
                        :value="option">
                    {{ option }}
                </option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>
        </div>

        <hr class="border-1 border-dotted my-8">

        <div id="content">
            <div :is="component" />
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            Alert: () => import('./components/Alert'),
            Badge: () => import('./components/Badge'),
            Code: () => import('./components/Code'),
            CodeDemo: () => import('./components/CodeDemo'),
            Content: () => import('./components/Content'),
            Heading: () => import('./components/Heading'),
            Input: () => import('./components/Input')
        },

        data() {
            return {
                component: 'Alert',
                options: [
                    'Alert',
                    'Badge',
                    'Code',
                    'CodeDemo',
                    'Content',
                    'Heading',
                    'Input'
                ]
            };
        },

        mounted() {
            const query = new URLSearchParams(window.location.search);

            if (query.has('component')) {
                this.component = query.get('component');
            }
        },

        created: function () {
            window.addEventListener('keydown', this.focusSelect);
        },

        beforeDestroy: function () {
            window.removeEventListener('keydown', this.focusSelect);
        },

        methods: {
            focusSelect(event) {
                if (event.key === '/') {
                    event.preventDefault();
                    document.getElementById('component').focus();
                }
            },

            setQuery() {
                const query = new URLSearchParams(window.location.search);

                query.set('component', this.component);

                history.pushState(null, null, '?' + query.toString());
            }
        },
    };
</script>

<style>
    #content > * > * {
        margin-bottom: 20px;
    }

    select:-moz-focusring {
        color: transparent;
        text-shadow: 0 0 0 #000;
    }
</style>
