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
        component: 'text-gray-800 bg-gray-100 flex flex-col min-h-screen',
        header: '',
        wrapper: 'flex flex-col flex-auto',
        container: 'flex flex-col md:flex-row container mx-auto w-full px-4',
        sidebar: 'w-full md:w-1/3 lg:w-1/5',
        main: 'w-full md:w-4/6 lg:w-4/5',
        footer: 'p-4 mt-4 bg-white bg-gray-200 border-t text-center'
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
        h2: 'my-3 text-3xl',
        h3: 'my-2 text-2xl',
        h4: 'my-1 text-xl',
        h5: ''
    },

    navbar: {
        component: 'bg-white h-16 border-b w-full',
        wrapper: 'container mx-auto px-4 flex flex-wrap justify-between items-center h-full',
        left: 'w-1/3 text-left',
        middle: 'w-1/3 text-center',
        right: 'w-1/3 text-right hidden md:block',
        menu: 'w-1/3 text-right md:hidden cursor-pointer select-none text-3xl'
    },

    sidebar: {
        sidebar: 'mb-4 z-10',
        item: 'block uppercase mt-4 text-sm text-gray-500 font-medium ',
        itemHovered: 'hover:text-gray-600',
        subItem: 'block normal-case font-normal text-gray-600 hover:text-gray-800',
        subItemHovered: 'hover:text-gray-800'
    },

    alert: {
        component: 'flex flex-col md:flex-row border-l-4 p-4 min-h-32',
        icon: 'flex w-16 mb-4 md:mb-0 md:justify-center items-center',
        body: 'flex-1',
        action: 'flex w-8 text-xl justify-center items-center cursor-pointer select-none',
        types: {
            default: 'bg-white',
            danger: 'bg-red-100 text-red-800 border-red-500',
            info: 'bg-blue-100 text-blue-800 border-blue-500',
            warning: 'bg-yellow-100 text-yellow-800 border-yellow-500',
            success: 'bg-green-100 text-green-800 border-green-500',
        }
    },

    panel: {
        header: 'text-xl mb-2 uppercase font-thin tracking-wider',
        panel: 'p-4 rounded shadow bg-white'
    },

    input: {
        label: 'font-bold block pb-1',
        input: 'border w-full p-2 rounded-md'
    },

    code: {
        component: 'relative',
        pre: 'rounded mb-0 pb-0',
        code: '',
        language: 'absolute right-0 top-0 py-2 px-3 text-gray-500 text-sm font-thin',
        caption: 'text-xs font-bold uppercase'
    }
};
