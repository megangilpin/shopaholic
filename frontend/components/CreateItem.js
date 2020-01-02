import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from './styles/Form';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';

class CreateItem extends Component {
  state = {
    title: 'Shoes',
    description: 'I love those shoes', 
    image: 'dog.jpg',
    largeImage: 'largeDog.jpg',
    price: 0, 
  };
 
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value; 
    this.setState({ [name]: e.target.value })
  }

  submit = e => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <Form onSubmit={this.submit}>
        <fieldset>
          <label htmlFor="title">
            Title
            <input 
              type="text" 
              id="title" 
              name="title" 
              placeholder="Title" 
              required value={this.state.title}
              onChange={this.handleChange} 
            />
          </label>

          <label htmlFor="title">
            Price
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              required value={this.state.price}
              onChange={this.handleChange} 
            />
          </label>

          <label htmlFor="title">
            Description
            <textarea
              id="description"
              name="description"
              placeholder="Enter a description"
              required value={this.state.description}
              onChange={this.handleChange} 
            />
          </label>
          <button type="submit">Submit</button>
        </fieldset>
      </Form>
    );
  }
}

export default CreateItem;