import React from 'react';
import Select from 'react-select';

const GuessBox= ({ guessChange, tries }) => {
  return (
    <div>
      <input 
      type='search' 
      className='pa3 ba b--red bg-transparent white'
      placeholder='Make a guess' 
      onKeyDown={guessChange}
      />
      {tries > 0 && <p>Tries: {tries}</p>}
    </div>
  )
}

export default GuessBox;