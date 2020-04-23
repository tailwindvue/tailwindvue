<!--suppress HtmlUnknownTag, HtmlDeprecatedTag, HtmlFormInputWithoutLabel, HtmlExtraClosingTag -->
<theme>

    <!-- ----------------------------------------------------------------------
    | The Alert Component
    |--------------------------------------------------------------------------
    |
    | This component renders an alert. There are five default styles for the
    | alert component: default, danger, info, warning and success. It can
    | also display an icon and a button to hide it when it is clicked.
    |
    -->

    <Alert class="flex items-center border-l-4 rounded p-4 min-h-32 border relative"
           :variants="{
                default: '',
                danger: 'text-red-800 border-red-500',
                info: 'text-blue-800 border-blue-500',
                warning: 'text-yellow-800 border-yellow-500',
                success: 'text-green-800 border-green-500',
            }">
        <progress class="absolute top-0 left-0 h-full w-full">
            <progress-bar class="h-full w-full transition-all duration-1000 ease-linear opacity-50 text-xs"
                          :variants="{
                               default: 'bg-gray-200',
                               danger: 'bg-red-200',
                               info: 'bg-blue-200',
                               warning: 'bg-yellow-200',
                               success: 'bg-green-200'
                          }" />
        </progress>
        <icon class="flex-shrink-0 mr-4 z-10" />
        <body class="flex-1 z-10" />
        <remaining-duration class="ml-4 italic flex-shrink-0" />
        <dismissButton class="ml-4 flex-shrink-0 font-bold text-xl leading-none cursor-pointer select-none z-10" />
    </Alert>

    <!-- ----------------------------------------------------------------------
    | The App Component
    |--------------------------------------------------------------------------
    |
    | This component is a wrapper component that surrounds other components.
    | You can use it to apply application level styles such as background
    | colour, text colour, and other styles that can apply to the app.
    |
    -->

    <App class="text-gray-700 flex flex-col min-h-screen">
        <header class="text-center" />
        <wrapper class="flex flex-col flex-auto mt-16">
            <banner class="text-center" />
            <container class="flex flex-col md:flex-row container mx-auto w-full px-4 lg:px-10 pt-4">
                <left class="w-full md:w-1/4 lg:w-1/4 xl:w-1/6" />
                <main class="w-full md:w-3/4 lg:w-2/4 xl:w-2/3" />
                <right class="hidden lg:w-1/4 lg:block xl:w-1/6 flex justify-end text-right" />
            </container>
        </wrapper>
        <footer class="text-center" />
    </App>

    <!-- ----------------------------------------------------------------------
    | The Badge Component
    |--------------------------------------------------------------------------
    |
    | This component will display a badge in one of the configurable styles:
    | default, info, warning, danger and success. Every badge can also be
    | displayed in the sizes predefined here: small, medium and large.
    |
    -->

    <Badge class="py-1 px-2 text-xs rounded uppercase border-l-4 tracking-wide font-medium border inline-block"
           :variants="{
               default: 'border-left-white text-gray-600',
               info: 'border-left-blue-100 text-blue-600 border-blue-200',
               warning: 'border-left-yellow-100 text-yellow-600 border-yellow-400',
               danger: 'border-left-red-100 text-red-600 border-red-200',
               success: 'border-left-green-100 text-green-600 border-green-200',
           }" />

    <!-- ----------------------------------------------------------------------
    | The Code Component
    |--------------------------------------------------------------------------
    |
    | This component will apply code highlighting to a block of code that is
    | passed to it in the default slot. You can set the language for each
    | code fragment and specify a caption tht will be displayed below.
    |
    -->

    <Code class="relative">
        <pre class="rounded">
            <code class="rounded block bg-gray-800 text-white text-sm md:text-base p-4 leading-sm" />
        </pre>
        <language class="absolute right-0 top-0 py-2 px-3 text-gray-500 text-sm font-thin hidden md:block" />
        <caption class="mt-2 text-xs uppercase text-gray-500 ml-4" />
    </Code>

    <!-- ----------------------------------------------------------------------
    | The Code Demo Component
    |--------------------------------------------------------------------------
    |
    | The code demo component can be used when you want to display a demo of
    | some code along side a snippet of the actual code. Just as with the
    | code component, you can declare the language and a code caption.
    |
    -->

    <CodeDemo>
        <wrapper class="border rounded-lg">
            <demo class="m-4" />
            <Code class="relative">
                <pre class="rounded rounded-t-none">
                    <code class="rounded-b block bg-gray-800 text-white text-sm md:text-base p-4 leading-sm" />
                </pre>
                <language class="absolute right-0 top-0 py-2 px-3 text-gray-500 text-sm font-thin hidden md:block" />
                <caption class="hidden" />
            </Code>
        </wrapper>
        <caption class="mt-2 text-xs uppercase text-gray-500 ml-4" />
    </CodeDemo>

    <!-- ----------------------------------------------------------------------
    | The Content Component
    |--------------------------------------------------------------------------
    |
    |
    |
    |
    |
    -->

    <Content class="space-y-6" />

    <!-- ----------------------------------------------------------------------
    | The Heading Component
    |--------------------------------------------------------------------------
    |
    | This component allows you to create semantically correct headings: h1,
    | h2, h3, h4 and h5. Sensible styles have been set for every heading.
    | Styles for the component and every heading can be changed below.
    |
    -->

    <Heading class="flex items-center"
             :variants="{
            h1: 'mb-4 border-b text-4xl w-full',
            h2: 'my-4 text-3xl',
            h3: 'my-4 text-2xl',
            h4: 'my-1 text-xl',
            h5: 'my-0 text-normal',
            h6: 'my-0 text-sm'
        }">
        <number class="inline-block bg-gray-700 text-base text-white h-6 w-6 rounded-full inline-flex justify-center items-center mr-2" />
        <anchor class="ml-2 text-gray-500 text-xl cursor-pointer" />
    </Heading>

    <!-- ----------------------------------------------------------------------
    | The Input Component
    |--------------------------------------------------------------------------
    |
    | The input component will render a text input with a label. A number of
    | options are available to change the look of the input and the label
    | as well as the different states that the input component enters.
    |
    -->

    <Input>
        <label class="font-bold block pb-1">
            <input class="border w-full p-2 rounded-md" />
        </label>
    </Input>

    <!-- ----------------------------------------------------------------------
    | The Link Component
    |--------------------------------------------------------------------------
    |
    |
    |
    |
    |
    -->

    <Link class="text-gray-600 hover:text-gray-800 transition duration-200 ease-in" />

    <!-- ----------------------------------------------------------------------
    | The Navbar Component
    |--------------------------------------------------------------------------
    |
    | This component will create a responsive page navbar with three content
    | slots. On smaller screens, the right slot will be replaced with a
    | menu icon which will trigger the event to toggle the sidebar.
    |
    -->

    <Navbar class="bg-gray-100 h-16 border-b w-full fixed z-20">
        <wrapper class="container mx-auto px-4 lg:px-10 flex flex-wrap justify-between items-center h-full">
            <left class="w-1/2 md:w-1/3 text-left" />
            <middle class="hidden md:block w-1/3 text-center" />
            <right class="w-1/2 md:w-1/3 text-right hidden md:block" />
            <menu class="w-1/3 text-right md:hidden cursor-pointer select-none text-3xl leading-none -mt-1" />
        </wrapper>
    </Navbar>

    <!-- ----------------------------------------------------------------------
    | The Panel Component
    |--------------------------------------------------------------------------
    |
    |
    |
    |
    |
    -->

    <Panel class="p-4 rounded shadow bg-white">
        <header class="text-xl font-medium tracking-wider" />
    </Panel>

    <!-- ----------------------------------------------------------------------
    | The Sidebar Component
    |--------------------------------------------------------------------------
    |
    |
    |
    |
    |
    -->

    <Sidebar />

    <!-- ----------------------------------------------------------------------
    | The Tab Component
    |--------------------------------------------------------------------------
    |
    |
    |
    |
    |
    -->

    <Tab />

    <!-- ----------------------------------------------------------------------
    | The Tabbed Code Demo Component
    |--------------------------------------------------------------------------
    |
    |
    |
    |
    |
    -->

    <TabbedCodeDemo>
        <Tabs class="w-full">
            <tabs class="flex md:ml-4 text-sm md:text-base flex-wrap">
                <tab class="mb-2 md:mb-0 py-1 px-4 w-1/3 md:w-auto cursor-pointer text-center rounded md:rounded-b-none hover:bg-gray-200 text-gray-500"
                     :variants="{
                     active: 'bg-gray-300 rounded-t text-gray-700',
                     inactive: 'border-gray-200'
                 }" />
            </tabs>
        </Tabs>
    </TabbedCodeDemo>

    <!-- ----------------------------------------------------------------------
    | The Table Component
    |--------------------------------------------------------------------------
    |
    |
    |
    |
    |
    -->

    <Table class="bg-white rounded-md border">
        <controls class="py-1 bg-gray-200 rounded-t-md w-full" />
        <wrapper class="overflow-x-scroll">
            <table class="table-auto w-full overflow-scroll">
                <thead class="border-b border-b-2 bg-gray-200 uppercase text-xs text-gray-600" />
                <tbody />
            </table>
        </wrapper>
    </Table>

    <!-- ----------------------------------------------------------------------
    | The Table Column Component
    |--------------------------------------------------------------------------
    |
    |
    |
    |
    |
    -->

    <TableColumn class="p-2 first:border-t-0 border-t" />

    <!-- ----------------------------------------------------------------------
    | The Table Heading Component
    |--------------------------------------------------------------------------
    |
    |
    |
    |
    |
    -->

    <TableHeading class="pt-2 pb-3 px-3 font-medium tracking-widest" />

    <!-- ----------------------------------------------------------------------
    | The Table Row Component
    |--------------------------------------------------------------------------
    |
    |
    |
    |
    |
    -->

    <TableRow />

    <!-- ----------------------------------------------------------------------
    | The Tabs Component
    |--------------------------------------------------------------------------
    |
    |
    |
    |
    |
    -->

    <Tabs class="w-full">
        <tabs class="flex border-b">
            <tab class="w-full px-4 py-2 cursor-pointer text-center hover:bg-gray-200 text-gray-500"
                 :variants="{
                     active: 'bg-gray-300 rounded-t text-gray-700',
                     inactive: 'border-gray-200'
                 }" />
        </tabs>
    </Tabs>

</theme>
