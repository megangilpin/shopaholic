import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// as react updates you will need to switch out the adapter
configure({ adapter: new Adapter() });
