<!--suppress HtmlUnknownTag, HtmlDeprecatedTag, HtmlFormInputWithoutLabel, HtmlExtraClosingTag -->
<theme>
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

    <Badge class="py-1 px-2 text-xs rounded uppercase border-l-4 tracking-wide font-medium border inline-block"
           :variants="{
               default: 'border-left-white text-gray-600',
               info: 'border-left-blue-100 text-blue-600 border-blue-200',
               warning: 'border-left-yellow-100 text-yellow-600 border-yellow-400',
               danger: 'border-left-red-100 text-red-600 border-red-200',
               success: 'border-left-green-100 text-green-600 border-green-200',
           }" />

    <Code class="relative">
        <pre class="rounded">
            <code class="rounded block bg-gray-800 text-white text-sm md:text-base p-4 leading-sm" />
        </pre>
        <language class="absolute right-0 top-0 py-2 px-3 text-gray-500 text-sm font-thin hidden md:block" />
        <caption class="mt-2 text-xs uppercase text-gray-500 ml-4" />
    </Code>

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

    <Content class="direct-children:mb-4" />

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

    <Input>
        <label class="font-bold block pb-1">
            <input class="border w-full p-2 rounded-md" />
        </label>
    </Input>

    <Link class="text-gray-600 hover:text-gray-800 transition duration-200 ease-in" />

    <Navbar class="bg-gray-100 h-16 border-b w-full fixed z-20">
        <wrapper class="container mx-auto px-4 lg:px-10 flex flex-wrap justify-between items-center h-full">
            <left class="w-1/2 md:w-1/3 text-left" />
            <middle class="hidden md:block w-1/3 text-center" />
            <right class="w-1/2 md:w-1/3 text-right hidden md:block" />
            <menu class="w-1/3 text-right md:hidden cursor-pointer select-none text-3xl leading-none -mt-1" />
        </wrapper>
    </Navbar>

    <Panel class="text-xl font-medium tracking-wider">
        <header class="p-4 rounded shadow bg-white" />
    </Panel>

    <Sidebar />

    <Tab />

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

    <Table class="bg-white rounded-md border">
        <controls class="py-1 bg-gray-200 rounded-t-md w-full" />
        <wrapper class="overflow-x-scroll">
            <table class="table-auto w-full overflow-scroll">
                <thead class="border-b border-b-2 bg-gray-200 uppercase text-xs text-gray-600" />
                <tbody />
            </table>
        </wrapper>
    </Table>

    <TableColumn class="p-2 first:border-t-0 border-t" />

    <TableHeading class="pt-2 pb-3 px-3 font-medium tracking-widest" />

    <TableRow />

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
