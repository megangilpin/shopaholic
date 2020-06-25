import CartCount from '../components/CartCount';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('<CartCount/>', () => {
  it('renders', () => {
    shallow(<CartCount count={10} />)
  });
  // can have multiple snap shots of elements of the component
  it('matches the snapshot', () => {
    const wrapper = shallow(<CartCount count={10} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it('updates via props', () => {
    const wrapper = shallow(<CartCount count={50} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    wrapper.setProps({ count:10 });
  })
})