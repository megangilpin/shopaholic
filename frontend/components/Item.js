import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import formatMoney from '../lib/formatMoney';
import DeleteItem from './DeleteItem';
import AddToCart from './AddToCart';


class Item extends Component {
  
  render() {
    const { item } = this.props;
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
          
          <div className="buttonList">
          
            <Link
              href={{
                pathname: 'update',
                query: { id: item.id },
              }}
            >
              <a>Edit ✏️</a>
            </Link>
            <AddToCart id={item.id} />
            <DeleteItem id={item.id}>Delete Item</DeleteItem>
          </div>
        </div>
      </ItemStyles>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
