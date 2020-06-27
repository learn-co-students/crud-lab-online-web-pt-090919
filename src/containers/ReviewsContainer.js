import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  filterReviews = () => {
    return this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
  }

  render() {
    return (
      <div>
        <Reviews
          reviews={this.filterReviews()}
          delRev={this.props.deleteReview}
        />
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => ({
  addReview: (text, restaurantId) => dispatch({ type: "ADD_REVIEW", review: {text, restaurantId} }),
  deleteReview: id => dispatch({ type: "DELETE_REVIEW", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
