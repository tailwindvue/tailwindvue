// Import Tailwind Css
import '@/assets/css/tailwind.css';

// Import Component Installer
import Install from './classes/Install';

// Import Components
import Input from 'Components/Input';
import Panel from 'Components/Panel';
import Sidenav from 'Components/Sidenav';
import Heading from 'Components/Heading';
import App from 'Components/layout/App';

const components = [
    App,
    Sidenav,
    Heading,
    Panel,
    Input
];

// Install every component.
components.forEach(component => Install.component(component));

// Export components for individual use.
export {
    App,
    Sidenav,
    Heading,
    Panel,
    Input
};

// Export the component library.
export default {
    install(Vue, options) {
        components.forEach(component => Vue.use(component, options));
    }
};
