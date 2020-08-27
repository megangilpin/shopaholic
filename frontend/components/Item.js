import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import ItemStyles from './styles/ItemStyles';
import formatMoney from '../lib/formatMoney';
import DeleteItem from './DeleteItem';
import AddToCart from './AddToCart';
import User from './User';
import Popup from "reactjs-popup";

const StyledPopup = styled(Popup)`
  &-content {
    border-radius: 10px;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
    hr {
      margin: 3rem;
      height: 3px;
      border: 0;
      background-color: ${props => props.theme.offWhite};
      box-shadow: ${props => props.theme.lgemboss};
    }
  }
`


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
                <div className="card_content">
                  <p className="card_money">{formatMoney(item.price)}</p>
                  <p className="card_description">{item.description}</p>
                </div>
                {!me ? 
                  <div className="buttonList">
                    <StyledPopup
                      trigger={<button className="button"> Add To Cart 🛒 </button>}
                      modal
                      closeOnDocumentClick
                    >
                      <span>
                        <hr></hr>
                        <h2> 💸 Please sign in to buy or sell 💸 </h2>
                        <Link href="/signup">
                          <a className="signup">Sign In</a>
                        </Link>
                      </span>
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
