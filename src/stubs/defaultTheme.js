export default {
    /*
    |--------------------------------------------------------------------------
    | The Application.
    |--------------------------------------------------------------------------
    |
    | This component is a wrapper you can use to surround all other components.
    | You can then use it to apply application-level styles such as padding,
    | text colour, background colour and anything else that is relevant.
    |
    */

    app: 'text-gray-900 bg-gray-100 h-screen p-10',

    /*
    |--------------------------------------------------------------------------
    | The Heading Component.
    |--------------------------------------------------------------------------
    |
    | This component allows you to quickly create semantically correct page
    | headings: h1, h2, h3, h4 and h5. Sensible styles have been applied
    | for each heading. You can modify the styles for every heading.
    |
    */

    heading: {
        h1: 'mb-4 border-b text-4xl',
        h2: 'mb-3 text-3xl',
        h3: 'mb-2 text-2xl',
        h4: 'mb-1 text-xl',
        h5: ''
    },

    nav: {
        nav: '',
        item: 'pb-4'
    },

    panel: {
        header: 'text-xl mb-2 uppercase font-thin tracking-wider',
        panel: 'p-4 rounded shadow bg-white'
    },

    input: {
        label: 'font-bold block pb-1',
        input: 'border w-full p-2 rounded-md'
    }
};
