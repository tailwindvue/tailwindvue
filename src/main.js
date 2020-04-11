// import Vue
import Vue from 'vue';

// Import utilities
import install from './utilities/install';
import whitelist from './utilities/whitelist';

// Import Stubs
import Theme from './stubs/theme';
import Options from './stubs/options';

// Import Components
import Alert from 'Components/Alert';
import App from 'Components/layout/App';
import Badge from './components/Badge';
import Code from 'Components/Code';
import CodeDemo from './components/CodeDemo';
import Content from './components/Content';
import Heading from 'Components/Heading';
import Input from 'Components/Input';
import Navbar from 'Components/Navbar';
import Panel from 'Components/Panel';
import Sidebar from 'Components/Sidebar';
import Tab from './components/Tab';
import TabbedCodeDemo from './components/TabbedCodeDemo';
import Table from './components/Table';
import TableColumn from './components/TableColumn';
import TableHeading from './components/TableHeading';
import TableRow from './components/TableRow';
import Tabs from './components/Tabs';

export const TailwindVueEventBus = new Vue();

const components = [
    Alert,
    App,
    Badge,
    Code,
    CodeDemo,
    Content,
    Heading,
    Input,
    Navbar,
    Panel,
    Sidebar,
    Tab,
    TabbedCodeDemo,
    Table,
    TableColumn,
    TableHeading,
    TableRow,
    Tabs,
];

// Install every component.
components.forEach(component => install(component));

export {
    whitelist
}

// Export Stubs
export {
    Theme,
    Options
};

// Export components for individual use.
export {
    Alert,
    App,
    Code,
    CodeDemo,
    Content,
    Heading,
    Input,
    Navbar,
    Panel,
    Sidebar,
    Tab,
    TabbedCodeDemo,
    Table,
    TableColumn,
    TableHeading,
    TableRow,
    Tabs,
};

// Export the component library.
export default {
    install(Vue, options) {
        components.forEach(component => Vue.use(component, options));
    }
};
