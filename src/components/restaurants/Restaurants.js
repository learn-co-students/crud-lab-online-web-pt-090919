import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {
    return(
      <ul>Restaurants
        {this.props.restaurants.map(rest =>
          <Restaurant restaurant={rest} delRest={this.props.delRest} />
        )}
      </ul>
    );
  }
};

export default Restaurants;