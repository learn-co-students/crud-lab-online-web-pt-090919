import React, { Component } from 'react';

//this.props.deleteReview

class Review extends Component {

  render() {
    const { review } = this.props
    
    handleClick = event => {
      review.deleteReview(review.restaurantId)
    }

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={this.handleClick}> X </button>
      </div>
    );
  }

};

export default Review;
