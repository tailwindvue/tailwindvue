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

    App: {
        component: 'text-gray-800 bg-gray-100 flex flex-col min-h-screen',
        header: 'mb-4',
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

    Heading: {
        component: '',
        headings: {
            h1: 'mb-4 border-b text-4xl',
            h2: 'my-3 text-3xl',
            h3: 'my-2 text-2xl',
            h4: 'my-1 text-xl',
            h5: 'my-0 text-normal',
            h6: 'my-0 text-sm'
        },
    },

    Navbar: {
        component: 'bg-white h-16 border-b w-full',
        wrapper: 'container mx-auto px-4 flex flex-wrap justify-between items-center h-full',
        left: 'w-1/2 md:w-1/3 text-left',
        middle: 'hidden md:block w-1/3  text-center',
        right: 'w-1/2 md:w-1/3 text-right hidden md:block',
        menu: 'w-1/3 text-right md:hidden cursor-pointer select-none text-3xl leading-none -mt-1'
    },

    Sidebar: {
        sidebar: 'mb-4 z-10',
        item: 'block uppercase mt-4 text-sm text-gray-500 font-medium ',
        itemHovered: 'hover:text-gray-600',
        subItem: 'block normal-case font-normal text-gray-600 hover:text-gray-800',
        subItemHovered: 'hover:text-gray-800'
    },

    Alert: {
        component: 'flex flex-col md:flex-row border-l-4 p-4 min-h-32 border',
        icon: 'flex w-16 mb-4 md:mb-0 md:justify-center items-center',
        body: 'flex-1 flex justify-between',
        action: 'flex w-8 text-xl justify-center items-center cursor-pointer select-none',
        types: {
            default: 'bg-white',
            danger: 'bg-red-100 text-red-800 border-red-500',
            info: 'bg-blue-100 text-blue-800 border-blue-500',
            warning: 'bg-yellow-100 text-yellow-800 border-yellow-500',
            success: 'bg-green-100 text-green-800 border-green-500',
        }
    },

    Panel: {
        header: 'text-xl mb-2 uppercase font-thin tracking-wider',
        panel: 'p-4 rounded shadow bg-white'
    },

    Input: {
        label: 'font-bold block pb-1',
        input: 'border w-full p-2 rounded-md'
    },

    Code: {
        component: 'relative',
        pre: 'rounded',
        code: '',
        language: 'absolute right-0 top-0 py-2 px-3 text-gray-500 text-sm font-thin',
        caption: 'mt-2 text-xs uppercase text-gray-500 ml-4'
    },

    CodeDemo: {
        component: 'border rounded-lg',
        demo: 'm-4',
        caption: 'mt-2 text-xs uppercase text-gray-500 ml-4',
        code: {
            component: 'relative',
            pre: 'rounded rounded-t-none',
            code: '',
            language: 'absolute right-0 top-0 py-2 px-3 text-gray-500 text-sm font-thin',
        }
    },

    TabbedCodeDemo: {
        component: 'w-full',
        tabs: 'flex md:ml-4 text-sm md:text-base flex-wrap',
        tab: 'mb-2 md:mb-0 py-1 px-4 w-1/3 md:w-auto cursor-pointer text-center rounded md:rounded-b-none hover:bg-gray-200 text-gray-500',
        activeTab: 'bg-gray-300 border-gray-500 rounded-t text-gray-700',
        inactiveTab: 'border-gray-200'
    },

    Tabs: {
        component: 'w-full',
        tabs: 'flex border-b',
        tab: 'w-full px-4 py-2 cursor-pointer text-center hover:bg-gray-200 text-gray-500',
        activeTab: 'bg-gray-300 rounded-t text-gray-700',
        inactiveTab: 'border-gray-200'
    },

    Table: {
        component: 'bg-white rounded-md border',
        headerRounding: 'py-1 bg-gray-200 rounded-t-md border-red-900 w-full',
        wrapper: 'overflow-x-scroll',
        table: 'table-auto w-full overflow-scroll',
        thead: 'border-b border-b-2 bg-gray-200 uppercase text-xs text-gray-600',
        th: 'pt-2 pb-3 px-3 font-medium tracking-widest',
        tr: 'first:border-t-0 border-t',
        td: 'p-3 text-center'
    },

    Badge: {
        component: 'py-1 px-2 text-xs rounded uppercase tracking-wide font-medium border',
        types: {
            default: 'bg-white text-gray-600',
            info: 'bg-blue-100 text-blue-600 border-blue-200',
            warning: 'bg-yellow-100 text-yellow-600 border-yellow-400',
            danger: 'bg-red-100 text-red-600 border-red-200',
            success: 'bg-green-100 text-green-600 border-green-200',
        }
    },
};
