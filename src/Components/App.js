import '../Styles/App.css';
import React, { Component } from 'react';
import Answer from './Answer';
import GuessBox from './GuessBox';
import Guesses from './Guesses';
import CastList from './CastList';
import ErrorBoundary from './ErrorBoundary';

const api_key = process.env.REACT_APP_API_KEY

class App extends Component {
  constructor() {
    super()
    this.state = {
      answer: '',
      guesses: [],
      movieID: '',
    }
  }

  // On page load, get a random movie from the API within the top 1000 (50 pages of 20 each)
  componentDidMount() {

    const randomPage = Math.floor(Math.random() * 50) + 1;
    const randomMovie = Math.floor(Math.random() * 20);

    const pageUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomPage}`;

    try {
      fetch(pageUrl)
      .then(resp => resp.json())
      .then(results => results.results)
      .then(data => {
        this.setState({ answer: data[randomMovie].title, movieID: data[randomMovie].id })
      })
    } catch (error) {
      console.log(error)
    }
  }

  onGuessChange = (guess) => {
    if(guess.key === "Enter") {
      this.setState({ guesses: [...this.state.guesses, guess.target.value] });
    }
  }

  render() {
    const { answer, guesses, movieID } = this.state;
    let tries;
    if(guesses.length < 8) {
      tries = guesses.length;
    } else {
      tries = 8;
    }

    if(movieID === '') {
      return(<div>Loading...</div>) 
    } else {
      return (
        <div className="tc">
          <div className='pb4'>
            {/* Header */}
            {/* <h2 className='blue'>Coming soon! Feel free to check out the site layout though</h2> */}
            <h1>Filmle</h1>

            <p>Try to guess the film title by its cast.</p>
            <p>You'll get access to more cast members after every guess.</p>
            <p>You can refresh to start a new game. Good luck!</p>
          </div>
          <div className=''>
            {/* Show answer when finished */}
            <Answer answer={answer} guesses={guesses} tries={tries}/>
            {/* <p>Answer: {answer}</p> */}
          </div>
          <div className='pb3'>
            <ErrorBoundary>
              {/* Make guesses */}
              <GuessBox guessChange={this.onGuessChange} tries={tries}/>
            </ErrorBoundary>
            
          </div>
          <div className='flex justify-center pb6'>
            <div className='w-45 tr'>
              {/* Previous guesses */}
              <Guesses guesses={guesses}/>
            </div>
            <div className='w-10'></div>
            <div className='w-45 tl'>
              {/* Cast */}
              <CastList tries={tries} movieID={movieID} />
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
}

export default App;
