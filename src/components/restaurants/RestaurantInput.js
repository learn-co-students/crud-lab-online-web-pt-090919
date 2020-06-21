import React, { Component } from 'react';
import { cuidFn } from '../../reducers/manageRestaurant'

class RestaurantInput extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      id: cuidFn(),
      text: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    const { id, text } = this.state
    this.props.addRestaurant(id, text)
    this.setState({
      id: cuidFn(),
      text: ''
    })

    event.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text" 
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
