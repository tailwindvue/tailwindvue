import { shallowMount } from '@vue/test-utils';
import App from 'Components/App';

describe('App', () => {
    it('renders the app component', () => expect(shallowMount(App).contains('div')).toBe(true));
});
