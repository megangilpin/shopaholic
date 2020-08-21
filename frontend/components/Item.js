import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import formatMoney from '../lib/formatMoney';
import DeleteItem from './DeleteItem';
import AddToCart from './AddToCart';
import User from './User';
import StyledPopup from './styles/PopUpStyle'


class Item extends Component {
  render() {
    const { item } = this.props;
    return (
      <User>
        {({ data }) => {
          const me = data ? data.me : null
          return (
            <ItemStyles>
              <div className="card">
                {item.image && <img src={item.image} alt={item.title} />}
                <Link
                  href={{
                    pathname: '/item',
                    query: { id: item.id },
                  }}
                  >
                  <a className="card_title">{item.title}</a>
                </Link>
                <p className="card_money">{formatMoney(item.price)}</p>
                <p className="card_description">{item.description}</p>
                {!me ? 
                  <div className="buttonList">
                    <StyledPopup
                      trigger={<button className="button">Add To Cart 🛒</button>}
                      modal
                      closeOnDocumentClick
                    >
                        <hr></hr>
                        <h2> 💸 Please sign in to buy or sell 💸 </h2>
                        <Link href="/signup">
                          <a className="signup">Sign In</a>
                        </Link>
                    </StyledPopup>
                  </div>
                  :                 
                  <div className="buttonList">
                    <Link
                      href={{
                        pathname: 'update',
                        query: { id: item.id },
                      }}
                    >
                      <button>Edit ✏️</button>
                    </Link>
                    <AddToCart id={item.id} me={me} />
                    <DeleteItem id={item.id} me={me}>Delete Item</DeleteItem>
                  </div>
                }
              </div>
            </ItemStyles>
          )
        }}
      </User>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
