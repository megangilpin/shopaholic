import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';
import formatMoney from '../lib/formatMoney';
import AddToCart from './AddToCart';

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    // width: auto;
    // height: 85vh;
    // margin: 0 auto;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 4rem 4rem;
    line-height: 1;
    color: ${props => props.theme.darkGrey};
  }
  .item_title {
    text-transform: uppercase;
    letter-spacing: .4rem;
    font-weight: 400;
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }
  .description_title {
    text-transform: uppercase;
    letter-spacing: .4rem;
    font-weight: 600;
    font-size: 2rem;
    color: ${props => props.theme.darkGrey};
    margin-top: 4rem;
    margin-bottom: 1.5rem;
  }
  .description {
    font-weight: 400;
    font-size: 1.5rem;
    color: ${props => props.theme.darkPurple};
    margin: 0;
  }
  button {
    height: 7rem;
    display: flex;
    align-items: center;
    margin-top: 4rem;
    padding: 1.7rem 2rem;
    text-transform: uppercase;
    letter-spacing: .2rem;
    font-weight: 600;
    font-size: 1.5rem;
    background: none;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    color:  ${props => props.theme.grey};
    transition: all .3s;
    &:hover {
      box-shadow: -6px -6px 10px white,
      1px 1px 5px rgba(0, 0, 0, 0.1);
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
    &:active 
    {
      border: none;
      box-shadow: inset -6px -6px 10px white, inset
      1px 1px 5px rgba(0, 0, 0, 0.1);
    }
  }
  hr {
    border: 0;
    height: 0;
    border-top: 1px solid ${props => props.theme.lightPurple};
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      price
      description
      largeImage
    }
  }
`;
class SingleItem extends Component {
  render() {
    return (
      <Query
        query={SINGLE_ITEM_QUERY}
        variables={{
          id: this.props.id,
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.item) return <p>No Item Found for {this.props.id}</p>;
          const item = data.item;
          return (
            <SingleItemStyles>
              <Head>
                <title>Sick Fits | {item.title}</title>
              </Head>
              <img src={item.largeImage} alt={item.title} />
              <div className="details">
                <h2 className="item_title">{item.title}</h2>
                <hr></hr>
                <h2>{formatMoney(item.price)}</h2>
                <p className="description_title">Details:</p>
                <p className="description">{item.description}</p>
                <AddToCart id={item.id} />
              </div>
            </SingleItemStyles>
          );
        }}
      </Query>
    );
  }
}

export default SingleItem;
export { SINGLE_ITEM_QUERY };
