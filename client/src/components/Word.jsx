import React, { useState } from 'react';
import LetterGuessForm from './LetterGuessForm.jsx';

const Word = ({word}) => {
  const [letter, setLetter] = useState('');

  const handleSubmit = (e, letter) => {
    setLetter(letter);
  }

  let wordDisplay = word.split('').map(char => {
    return '_';
  }).join(' ');

  return (
    <div>
      {wordDisplay}
      <LetterGuessForm handleSubmit={handleSubmit} />
    </div>
  )
};

// check user input to see if the word contains the letter
// change the string and put the character in place of the '_' anywhere it is
// i.e. if a word has 2 like 'apple' and the person guesses the 'p', the string would be '_pp__'
export default Word;