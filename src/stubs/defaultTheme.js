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

    app: {
        component: 'text-gray-800 bg-gray-100 h-screen',
        navbar: '',
        wrapper: 'container mx-auto flex flex-wrap px-4',
        sidebar: 'w-full md:w-1/5',
        main: 'w-full md:w-4/5'
    },

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

    navbar: {
        component: 'bg-white h-16 mb-4 border-b',
        wrapper: 'container mx-auto px-4 flex flex-wrap justify-between items-center h-full',
        left: 'w-1/3 text-left',
        middle: 'w-1/3 text-center',
        right: 'w-1/3 text-right hidden md:block',
        hamburger: 'w-1/3 text-right md:hidden cursor-pointer select-none text-3xl'
    },

    sidebar: {
        sidebar: 'mb-4',
        item: 'block uppercase mt-4 text-xs text-gray-500 font-medium ',
        itemHovered: 'hover:text-gray-600',
        subItem: 'block normal-case font-normal text-gray-600 text-sm hover:text-gray-800',
        subItemHovered: 'hover:text-gray-800'
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
