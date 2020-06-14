import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    const { restaurant } = this.props;
    
    handleClick = () => {
      restaurant.deleteRestaurant(restaurant.id)
    }

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={this.handleClick}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
