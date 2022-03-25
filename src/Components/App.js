import '../Styles/App.css';
import React, { Component } from 'react';
import Answer from './Answer';
import GuessBox from './GuessBox';
import Guesses from './Guesses';
import CastList from './CastList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      answer: '',
      guessField: '',
      guesses: [],
      cast: []
    }
  }

  componentDidMount() {
    fetch()
  }

  onGuessChange = (typeEvent) => {
    this.setState({ guessField: typeEvent.target.value });
  }

  render() {

    return (
      <div className="tc">
        <div className='pb4'>
          {/* Header */}
          <h2 className='blue'>Coming soon! Feel free to check out the site layout though</h2>
          <h1>Filmle</h1>

          <p>Try to guess the film title by its cast.</p>
          <p>You'll get access to more cast members after every guess.</p>
          <p>Your guesses will be hotter or colder based on the release year.</p>
        </div>
        <div className=''>
          {/* Show answer when finished */}
          <Answer />
        </div>
        <div className='pb3'>
          {/* Make guesses */}
          <GuessBox guessChange={this.onGuessChange}/>
        </div>
        <div className='flex'>
          <div className='pl6 w-50'>
            {/* Previous guesses */}
            <Guesses />
          </div>
          <div className='pr6 w-50'>
            {/* Cast */}
            <CastList />
          </div>
        </div>
        <div>
          {/* Footer */}
          <p>All of the data used on this site is from <a href="https://www.themoviedb.org/">TMDB</a></p>
          <p>They are a community driven movie database, with a free API</p>
        </div>
      </div>
    );
  }
}

export default App;
