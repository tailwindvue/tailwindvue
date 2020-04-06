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

export const TailwindVueEventBus = new Vue();

const components = [
    App,
    Sidebar,
    Heading,
    Panel,
    Input,
    Navbar,
    Alert,
    Code,
    CodeDemo
];

// Install every component.
components.forEach(component => Install.component(component));

// Export components for individual use.
export {
    App,
    Sidebar,
    Heading,
    Panel,
    Input,
    Navbar,
    Alert,
    Code,
    CodeDemo
};

// Export the component library.
export default {
    install(Vue, options) {
        components.forEach(component => Vue.use(component, options));
    }
};
