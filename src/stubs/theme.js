module.exports = {
    /*
    |--------------------------------------------------------------------------
    | The Alert Component
    |--------------------------------------------------------------------------
    |
    | This component renders an alert. There are five default styles for the
    | alert component: default, danger, info, warning and success. It can
    | also display an icon and a button to hide it when it is clicked.
    |
    */

    alert: {
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

    /*
    |--------------------------------------------------------------------------
    | The App Component
    |--------------------------------------------------------------------------
    |
    | This component is a wrapper component that surrounds other components.
    | You can use it to apply application level styles such as background
    | colour, text colour, and other styles that can apply to the app.
    |
    */

    app: {
        component: 'text-gray-700 bg-gray-100 flex flex-col min-h-screen',
        header: 'mb-20',
        wrapper: 'flex flex-col flex-auto',
        container: 'flex flex-col md:flex-row container mx-auto w-full px-4',
        left: 'w-full md:w-1/4 lg:w-64',
        main: 'w-full md:w-3/4 lg:flex-1',
        right: 'w-full hidden lg:w-64 lg:block flex justify-end text-right',
        footer: 'p-4 mt-10 md:mt-20 bg-white bg-gray-200 border-t text-center'
    },

    /*
    |--------------------------------------------------------------------------
    | The Badge Component
    |--------------------------------------------------------------------------
    |
    | This component will display a badge in one of the configurable styles:
    | default, info, warning, danger and success. Every badge can also be
    | displayed in the sizes predefined here: small, medium and large.
    |
    */

    badge: {
        component: 'py-1 px-2 text-xs rounded uppercase tracking-wide font-medium border inline-block',
        types: {
            default: 'bg-white text-gray-600',
            info: 'bg-blue-100 text-blue-600 border-blue-200',
            warning: 'bg-yellow-100 text-yellow-600 border-yellow-400',
            danger: 'bg-red-100 text-red-600 border-red-200',
            success: 'bg-green-100 text-green-600 border-green-200',
        }
    },

    /*
    |--------------------------------------------------------------------------
    | The Code Component
    |--------------------------------------------------------------------------
    |
    | This component will apply code highlighting to a block of code that is
    | passed to it in the default slot. You can set the language for each
    | code fragment and specify a caption tht will be displayed below.
    |
    */

    code: {
        component: 'relative',
        pre: 'rounded p-10',
        code: '',
        language: 'absolute right-0 top-0 py-2 px-3 text-gray-500 text-sm font-thin hidden md:block',
        caption: 'mt-2 text-xs uppercase text-gray-500 ml-4'
    },

    /*
    |--------------------------------------------------------------------------
    | The Code Demo Component
    |--------------------------------------------------------------------------
    |
    | The code demo component can be used when you want to display a demo of
    | some code along side a snippet of the actual code. Just as with the
    | code component, you can declare the language and a code caption.
    |
    */

    codeDemo: {
        component: 'border rounded-lg',
        demo: 'm-4',
        caption: 'mt-2 text-xs uppercase text-gray-500 ml-4',
        code: {
            component: 'relative',
            pre: 'rounded rounded-t-none',
            code: '',
            language: 'absolute right-0 top-0 py-2 px-3 text-gray-500 text-sm font-thin hidden md:block',
        }
    },

    /*
    |--------------------------------------------------------------------------
    | The Content Component
    |--------------------------------------------------------------------------
    |
    |
    |
    |
    |
    */

    content: {
        component: 'direct-children:mb-4',
    },

    /*
    |--------------------------------------------------------------------------
    | The Heading Component
    |--------------------------------------------------------------------------
    |
    | This component allows you to create semantically correct headings: h1,
    | h2, h3, h4 and h5. Sensible styles have been set for every heading.
    | Styles for the component and every heading can be changed below.
    |
    */

    heading: {
        component: 'flex items-center group',
        number: 'inline-block bg-gray-700 text-base text-white h-6 w-6 rounded-full inline-flex justify-center items-center mr-2',
        headings: {
            h1: 'mb-4 border-b text-4xl w-full',
            h2: 'my-4 text-3xl',
            h3: 'my-4 text-2xl',
            h4: 'my-1 text-xl',
            h5: 'my-0 text-normal',
            h6: 'my-0 text-sm'
        },
        hovered: 'cursor-pointer',
        anchor: 'ml-2 text-gray-500 text-xl invisible group-hover:visible'
    },

    /*
    |--------------------------------------------------------------------------
    | The Input Component
    |--------------------------------------------------------------------------
    |
    | The input component will render a text input with a label. A number of
    | options are available to change the look of the input and the label
    | as well as the different states that the input component enters.
    |
    */

    input: {
        label: 'font-bold block pb-1',
        input: 'border w-full p-2 rounded-md'
    },

    /*
    |--------------------------------------------------------------------------
    | The Navbar Component
    |--------------------------------------------------------------------------
    |
    | This component will create a responsive page navbar with three content
    | slots. On smaller screens, the right slot will be replaced with a
    | menu icon which will trigger the event to toggle the sidebar.
    |
    */

    navbar: {
        component: 'bg-white h-16 border-b w-full fixed z-20',
        wrapper: 'container mx-auto px-4 flex flex-wrap justify-between items-center h-full',
        left: 'w-1/2 md:w-1/3 text-left',
        middle: 'hidden md:block w-1/3 text-center',
        right: 'w-1/2 md:w-1/3 text-right hidden md:block',
        menu: 'w-1/3 text-right md:hidden cursor-pointer select-none text-3xl leading-none -mt-1'
    },

    /*
    |--------------------------------------------------------------------------
    | The Panel Component
    |--------------------------------------------------------------------------
    |
    |
    |
    |
    |
    */

    panel: {
        header: 'text-xl mb-2 font-medium tracking-wider',
        panel: 'p-4 rounded shadow bg-white'
    },

    /*
    |--------------------------------------------------------------------------
    | The Sidebar Component
    |--------------------------------------------------------------------------
    |
    |
    |
    |
    |
    */

    sidebar: {
        component: '',
        item: 'block uppercase mt-4 text-sm text-gray-500 font-medium',
        itemHovered: 'hover:text-gray-600',
        subItem: 'block normal-case font-normal text-gray-600 hover:text-gray-800',
        subItemHovered: 'hover:text-gray-800'
    },

    /*
    |--------------------------------------------------------------------------
    | The Tabs Component
    |--------------------------------------------------------------------------
    |
    |
    |
    |
    |
    */

    tabs: {
        component: 'w-full',
        tabs: 'flex border-b',
        tab: 'w-full px-4 py-2 cursor-pointer text-center hover:bg-gray-200 text-gray-500',
        activeTab: 'bg-gray-300 rounded-t text-gray-700',
        inactiveTab: 'border-gray-200'
    },

    /*
    |--------------------------------------------------------------------------
    | The Tabbed Demo Component
    |--------------------------------------------------------------------------
    |
    |
    |
    |
    |
    */

    tabbedCodeDemo: {
        component: 'w-full',
        tabs: 'flex md:ml-4 text-sm md:text-base flex-wrap',
        tab: 'mb-2 md:mb-0 py-1 px-4 w-1/3 md:w-auto cursor-pointer text-center rounded md:rounded-b-none hover:bg-gray-200 text-gray-500',
        activeTab: 'bg-gray-300 border-gray-500 rounded-t text-gray-700',
        inactiveTab: 'border-gray-200'
    },

    /*
    |--------------------------------------------------------------------------
    | The Table Component
    |--------------------------------------------------------------------------
    |
    |
    |
    |
    |
    */

    table: {
        component: 'bg-white rounded-md border',
        headerRounding: 'py-1 bg-gray-200 rounded-t-md border-red-900 w-full',
        wrapper: 'overflow-x-scroll',
        table: 'table-auto w-full overflow-scroll',
        thead: 'border-b border-b-2 bg-gray-200 uppercase text-xs text-gray-600',
        tbody: '',
    },

    /*
    |--------------------------------------------------------------------------
    | The Table Row Component
    |--------------------------------------------------------------------------
    |
    |
    |
    |
    |
    */

    tableRow: {
        component: 'first:border-t-0 border-t',
    },

    /*
    |--------------------------------------------------------------------------
    | The Table Column Component
    |--------------------------------------------------------------------------
    |
    |
    |
    |
    |
    */

    tableColumn: {
        component: 'p-2 first:border-t-0 border-t',
    },

    /*
    |--------------------------------------------------------------------------
    | The Table Heading Component
    |--------------------------------------------------------------------------
    |
    |
    |
    |
    |
    */

    tableHeading: {
        component: 'pt-2 pb-3 px-3 font-medium tracking-widest',
    },
};
