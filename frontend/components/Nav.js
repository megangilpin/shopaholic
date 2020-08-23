import Link from 'next/link';
import { useRouter } from 'next/router'
import { Mutation } from 'react-apollo';
import { TOGGLE_CART_MUTATION } from './Cart';
import NavStyles from './styles/NavStyles';
import User from './User';
import CartCount from './CartCount';
import SignOut from './SignOut';


function Nav() {
  return (
  <User>
    {({ data }) => {
      const me = data ? data.me : null
      return (
      <NavStyles data-test="nav">
        <Link href="/items">
          <a >Shop</a>
        </Link>
        {me && (
          <>
            <Link href="/sell">
                <a >Sell</a>
            </Link>
            <Link href="/orders">
              <a >Orders</a>
            </Link>
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
          <Link href="/signup">
            <a>Sign In</a>
          </Link>

        )}
      </NavStyles>
    )
    }}
  </User>
)};

export default Nav;