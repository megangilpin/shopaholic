import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const REMOVE_FROM_CART_MUTATION = gql`
  mutation removeFromCart($id: ID!) {
    removeFromCart(id: $id) {
      id
    }      
  }
`;

const BigButton = styled.button`
  background: ${props => props.theme.offWhite};
  color: ${props => props.theme.lightgrey};
  font-size: 3rem;
  border: 0;
  text-shadow: ${props => props.theme.lgemboss};
  &:hover {
    color: ${props => props.theme.darkGrey};
    text-shadow: ${props => props.theme.greyemboss};
  }
`;

class RemoveFromCart extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }

  //This gets called as soon as we get a response back from the server after a mutation has been performed
  update = (cache, payload) => {
    //read the cache
    const data = cache.readQuery({ query: CURRENT_USER_QUERY});
    //remove that item from the cart
    const cartItemId = payload.data.removeFromCart.id;
    data.me.cart = data.me.cart.filter(cartItem => cartItem.id !== cartItemId);
    //write it back to the cache
    cache.writeQuery({ query: CURRENT_USER_QUERY, data });
  }

  render() {
    return (
      <Mutation 
        mutation={REMOVE_FROM_CART_MUTATION} 
        variables={{ id: this.props.id }} 
        update={this.update}
        optimisticResponse={{
          __typename: 'Mutation',
          removeFromCart: {
            __typename: 'CartItem',
            id: this.props.id,
          },
        }}
      >
        {(removeFromCart, { loading, error }) => (
          <BigButton
            disabled={loading}
            onClick={() => {
              removeFromCart().catch(err => alert(err.message));
            }}
            title="Delete Item"
          >
            &times;
          </BigButton>
        )}
      </Mutation>
    );
  }
}

export default RemoveFromCart;
export { REMOVE_FROM_CART_MUTATION }