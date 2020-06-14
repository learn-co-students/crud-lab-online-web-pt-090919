import React, { Component } from 'react';


class RestaurantInput extends Component {
  
  state = {restaurantName: ''}
  
  handleChange = event => {
    this.setState({restaurantName: event.target.value})
  }
  
  handleSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.restaurantName)
    this.setState({restaurantName: ''})
  }
  
  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.restaurantName}
        onChange={this.handleChange}/>
        <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
