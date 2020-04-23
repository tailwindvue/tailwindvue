// import Vue
import Vue from 'vue';

// Import utilities
import install from './utilities/install';

// Import Components
import Alert from 'Components/Alert';
import App from 'Components/App';
import Badge from 'Components/Badge';
import Code from 'Components/Code';
import CodeDemo from 'Components/CodeDemo';
import Content from 'Components/Content';
import Heading from 'Components/Heading';
import Input from 'Components/Input';
import Link from 'Components/Link';
import Navbar from 'Components/Navbar';
import Panel from 'Components/Panel';
import Sidebar from 'Components/Sidebar';
import Tab from 'Components/Tab';
import TabbedCodeDemo from 'Components/TabbedCodeDemo';
import Table from 'Components/Table';
import TableColumn from 'Components/TableColumn';
import TableHeading from 'Components/TableHeading';
import TableRow from 'Components/TableRow';
import Tabs from 'Components/Tabs';

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
    Link,
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

// Export components for individual use.
export {
    Alert,
    App,
    Code,
    CodeDemo,
    Content,
    Heading,
    Input,
    Link,
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
