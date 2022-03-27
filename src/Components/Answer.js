import React, { Component } from 'react';

class Answer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      finished : false,
      correct : false,
    }
  }

  render() {
    const { finished, correct } = this.state
    const { answer, guesses } = this.props
    return(
      <div>

      </div>
    );
  }
}

export default Answer;