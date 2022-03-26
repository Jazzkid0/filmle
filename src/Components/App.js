import '../Styles/App.css';
import React, { Component } from 'react';
import Answer from './Answer';
import GuessBox from './GuessBox';
import Guesses from './Guesses';
import CastList from './CastList';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  constructor() {
    super()
    this.state = {
      answer: '',
      guessField: '',
      guesses: [],
      castList: [],
      finished: false,
      correct: false
    }
  }

  componentDidMount() {
    try {
      fetch("https://api.themoviedb.org/3/movie/550?api_key=e1acd5a11dbd34b127dc1dc08a8be166")
      .then(resp => resp.json())
      .then(details => this.setState({ answer: details.title }))
      .catch(err => console.log("Failed to grab title: ", err))
    } catch (error) {
      console.log("Failed to grab title: ", error);
    }
    
    try {
      fetch("https://api.themoviedb.org/3/movie/550/credits?api_key=e1acd5a11dbd34b127dc1dc08a8be166&language=en-US")
      .then(resp => resp.json())
      .then(data => this.setState({ castList: data.cast }))
      .catch(err => console.log("Failed to grab cast: ", err))
    } catch (error) {
      console.log("Failed to grab cast: ", error);
    }

    
  }

  onSubmitGuess = (guess) => {
    if(guess.key === "Enter") {
      this.setState({ guesses: [...this.state.guesses, guess.target.value] });
    }
  }

  render() {
    const { answer, castList, finished, correct, guesses } = this.state;
    const tries = guesses.length;
    const filteredCastList = castList.slice(0, tries+1)

    return (
      <div className="tc">
        <div className='pb4'>
          {/* Header */}
          <h2 className='blue'>Coming soon! Feel free to check out the site layout though</h2>
          <h1>Filmle</h1>

          <p>Try to guess the film title by its cast.</p>
          <p>You'll get access to more cast members after every guess.</p>
        </div>
        <div className=''>
          {/* Show answer when finished */}
          <Answer answer={answer} finished={finished} correct={correct}/>
        </div>
        <div className='pb3'>
          <ErrorBoundary>
            {/* Make guesses */}
            <GuessBox guessChange={this.onSubmitGuess} tries={tries}/>
          </ErrorBoundary>
          
        </div>
        <div className='flex justify-center pb6'>
          <br className='pb6'/>
          <div className='w-45 tr'>
            {/* Previous guesses */}
            <Guesses guesses={guesses}/>
          </div>
          <div className='w-10'></div>
          <div className='w-45 tl'>
            {/* Cast */}
            <CastList castList={filteredCastList} />
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
