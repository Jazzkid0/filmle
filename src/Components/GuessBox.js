import React from 'react';
import Select from 'react-select';

const GuessBox= ({ guessChange }) => {
  return (
    <div>
      <input 
      type='search' 
      className='pa3 ba b--red bg-transparent white' 
      placeholder='Make a guess' 
      onChange={guessChange} />
    </div>
  )
}

export default GuessBox;