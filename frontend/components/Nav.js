import Link from 'next/link';
import { Mutation } from 'react-apollo';
import { TOGGLE_CART_MUTATION } from './Cart';
import NavStyles from './styles/NavStyles';
import User from './User';
import CartCount from './CartCount';
import SignOut from './SignOut';
import LinkElement from './LinkElement';


function Nav() {
  return (
  <User>
    {({ data }) => {
      const me = data ? data.me : null
      return (
      <NavStyles data-test="nav">
          <div >
            <LinkElement href="/items" activeClassName="active">
              <a>Shop</a>
            </LinkElement>
          </div>
        {me && (
          <>
            <LinkElement href="/sell" activeClassName="active">
                <a >Sell</a>
            </LinkElement>
            <LinkElement href="/orders" activeClassName="active">
              <a >Orders</a>
            </LinkElement>
            {/* <Link href="/me">
              <a>Account</a>
            </Link> */}
            <SignOut />
            <Mutation mutation={TOGGLE_CART_MUTATION}>
              {(toggleCart) => (
                <button className="nav-btn" onClick={toggleCart}>
                  <span className="nav-btn-text">
                    My Cart
                  </span>
                  <span className="cart-count">
                    <CartCount count={me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)}></CartCount>
                  </span>
                </button>
              )}
            </Mutation>
          </>
        )}
        {!me && (
          <LinkElement href="/signup" activeClassName="active">
            <a>Sign In</a>
          </LinkElement>
        )}
      </NavStyles>
    )
    }}
  </User>
)};

export default Nav;