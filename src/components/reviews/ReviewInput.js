import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  
  state = {reviewName: ''}
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state.addReview)
    this.setState({addReview: ''})
  }
  
  handleChange = event => {
    this.setState({reviewName: event.target.value})
  }
  
  render() {
    return (
      <div>
        Review Input
       <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.bandName}
            onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
