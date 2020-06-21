import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const renderRestaurants = this.props.restaurants.map(restaurant => {
      // debugger
      return <Restaurant key={restaurant.id} restaurant={restaurant} />
    })
    return(
      <ul>
        {renderRestaurants}
      </ul>
    );
  }
};

export default Restaurants;