// import Vue
import Vue from 'vue';

// Import Tailwind Css
import '@/assets/css/tailwind.css';

// Import Component Installer
import Install from './classes/Install';

// Import Components
import Input from 'Components/Input';
import Panel from 'Components/Panel';
import Sidebar from 'Components/Sidebar';
import Heading from 'Components/Heading';
import App from 'Components/layout/App';
import Navbar from 'Components/Navbar';

const TailwindVueEventBus = new Vue();

const components = [
    App,
    Sidebar,
    Heading,
    Panel,
    Input,
    Navbar
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
    TailwindVueEventBus
};

// Export the component library.
export default {
    install(Vue, options) {
        components.forEach(component => Vue.use(component, options));
    }
};
