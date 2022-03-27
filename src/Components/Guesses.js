import React from 'react';
import Guess from './Guess';

const Guesses = ({ guesses }) => {
  const limitedGuesses = guesses.slice(0, 8);

  return (
    <div>
      <h2>Guesses</h2>
      {limitedGuesses.map((guess, i) => {
        return (
          <Guess key={i} guess={guess} />
        );
      })}
    </div>
  );
}

export default Guesses;