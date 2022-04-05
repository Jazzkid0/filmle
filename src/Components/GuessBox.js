import React from 'react';

const GuessBox= ({ guessChange, tries }) => {
  return (
    <div>
      <input 
      type='search' 
      className='pa3 ba b--red bg-transparent white'
      placeholder='Make a guess' 
      onKeyDown={guessChange}
      />
      {tries > 0 && <p>Tries: {tries}/8</p>}
    </div>
  )
}

export default GuessBox;