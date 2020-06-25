import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';import Router from 'next/router';
import RequestReset, { REQUEST_RESET_MUTATION } from '../components/RequestReset';


const mock = [
  {
    request: {
      query: REQUEST_RESET_MUTATION,
      variables: { email: 'email@email.com'},
    },
    result: {
      data: { requestReset: { message: 'success', __typename: 'Message'} },
    },
  },
];

describe('<RequestRest/>', () => {
  it('renders and matches snapshot', async () => {
    const wrapper = mount(
      <MockedProvider>
        <RequestReset />
      </MockedProvider>
    );
    const form = wrapper.find('form[data-test="form"]');
    expect(toJSON(form)).toMatchSnapshot();
  });
  it('calls the mutation', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mock}>
        <RequestReset />
      </MockedProvider>
    );
    // simulate typing an email
    wrapper
      .find('input')
      .simulate('change', { target: { name: 'email', value: 'email@email.com'} });
      // submit the form
    wrapper.find('form').simulate('submit');
    await wait();
    wrapper.update();
    expect(wrapper.find('p').text()).toContain('Success! Check your email for a reset link')
    });
});