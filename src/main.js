// import Vue
import Vue from 'vue';

// Import Component Installer
import Install from './classes/Install';

// Import Components
import Input from 'Components/Input';
import Panel from 'Components/Panel';
import Sidebar from 'Components/Sidebar';
import Heading from 'Components/Heading';
import App from 'Components/layout/App';
import Navbar from 'Components/Navbar';
import Alert from 'Components/Alert';
import Code from 'Components/Code';
import CodeDemo from './components/CodeDemo';
import Tabs from './components/Tabs';
import Tab from './components/Tab';
import TabbedCodeDemo from './components/TabbedCodeDemo';
import Table from './components/Table';
import Badge from './components/Badge';

export const TailwindVueEventBus = new Vue();

const components = [
    Alert,
    App,
    Badge,
    Code,
    CodeDemo,
    Heading,
    Input,
    Navbar,
    Panel,
    Sidebar,
    Tab,
    TabbedCodeDemo,
    Table,
    Tabs,
];

// Install every component.
components.forEach(component => Install.component(component));

// Export components for individual use.
export {
    Alert,
    App,
    Code,
    CodeDemo,
    Heading,
    Input,
    Navbar,
    Panel,
    Sidebar,
    Tab,
    TabbedCodeDemo,
    Table,
    Tabs,
};

// Export the component library.
export default {
    install(Vue, options) {
        components.forEach(component => Vue.use(component, options));
    }
};
