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
    let { finished, correct } = this.state
    const { answer, guesses, tries } = this.props
    if(tries === 8) {
      finished = true;
    }
    if(guesses.includes(answer)) {
      finished = true;
      correct = true;
    }
    if(finished) {
      if(correct) {
        return(
          <div className='pa3 mb3 bg-green'>
            <h1 className='f1'>You got it!</h1>
            <p>The answer was <em>{answer}</em></p>
            <p>You got it in {tries} guesses!</p>
          </div>
        )
      } else {
        return(
          <div className='pa3 mb3 bg-red'>
            <h1 className='f1'>Out of guesses!</h1>
            <p>The answer was {answer}</p>
          </div>
        )
      }
    } else {
      return(
        <div></div>
      )
    }
  }
}

export default Answer;