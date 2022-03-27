import React from 'react';
import Guess from './Guess';

const Guesses = ({ guesses }) => {
  return (
    <div>
      <h2>Guesses</h2>
      {guesses.map((guess, i) => {
        return (
          <Guess key={i} guess={guess} />
        );
      })}
    </div>
  );
}

export default Guesses;