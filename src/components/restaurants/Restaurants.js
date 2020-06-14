import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const restaurants = this.props.map(restaurant => <Restaurant key={restaurant.id} {...restaurant} deleteRestaurant={this.props.deleteRestaurant}/>)
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;