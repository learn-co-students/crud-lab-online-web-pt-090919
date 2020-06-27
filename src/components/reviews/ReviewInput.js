import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    text: "",
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addReview(this.state.text, this.props.restaurantId);
    this.setState({
      text: "",
    });
  }

  render() {
    return (
      <div>
        <p>ADD REVIEW</p>
        <form onSubmit={e => this.handleSubmit(e)} >
          <input
            type="text" 
            name="text" 
            value={this.state.text} 
            onChange={e => this.handleChange(e)} 
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
