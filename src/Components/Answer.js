import React, { Component } from 'react';

class Answer extends Component {
  render() {
    return (
      <div>
        <p>{this.props.answer}</p>
      </div>
    );
  }
}

export default Answer;