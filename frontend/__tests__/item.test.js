import ItemComponent from '../components/Item';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { CURRENT_USER_QUERY } from '../components/User';
import { MockedProvider } from 'react-apollo/test-utils';
import { fakeUser, fakeCartItem } from '../lib/testUtils';
import wait from 'waait';

const fakeItem = {
  id: 'ABC123',
  title: 'T-shirt',
  price: 4000,
  description: 'Tye Dye Tshirt',
  image: 'dog.jpg',
  largeImage: 'largedog.jpg',
};

const notSignedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: null } },
  },
];

const signedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: fakeUser() } },
  },
];

describe('<Item/>', () => {
  it('renders and matches the snapshot', async () => {
    const wrapper = mount(
      <MockedProvider mocks={signedInMocks}>
        <ItemComponent item= {fakeItem}/>)
      </MockedProvider>
    );
    await wait();
    wrapper.update();

    expect(toJSON(wrapper.find('button'))).toMatchSnapshot();
  })
  // it('renders the image properly', async () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem}/>);
  //   const image = wrapper.find('img');
  //   // expect(image.props().src).toBe(fakeItem.image);
  //   expect(image.props().alt).toBe(fakeItem.title);
  // });

  // it('renders price tag and title', () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem}/>);
  //   const PriceTag = wrapper.find('PriceTag');
  //   // .dive() and .children()n will allow you to shallow render one level deeper
  //   // console.log(PriceTag.dive().text());
  //   expect(PriceTag.children().text()).toBe('$50')
  //   expect(wrapper.find('Title a').text()).toBe(fakeItem.title);
  // });

  // it('renders out the buttons properly', () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem}/>);
  //   const ButtonList = wrapper.find('.buttonList');
  //   expect(ButtonList.children()).toHaveLength(3);
  //   expect(ButtonList.find('Link')).toHaveLength(1);
  //   expect(ButtonList.find('AddToCart').exists()).toBe(true);
  //   expect(ButtonList.find('DeleteItem').exists()).toBe(true);
  // });
})