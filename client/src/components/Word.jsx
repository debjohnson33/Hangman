import React, { useState } from 'react';
import LetterGuessForm from './LetterGuessForm.jsx';

const Word = ({word}) => {
  const [letter, setLetter] = useState('');

  const handleSubmit = (e, letter) => {
    setLetter(letter);
  }

  return (
    <div>
      {word}
      <LetterGuessForm handleSubmit={handleSubmit} />
    </div>
  )
};
// build a string of '_' using the word length - put space in between each in display
// check user input to see if the word contains the letter
// change the string and put the character in place of the '_' anywhere it is
// i.e. if a word has 2 like 'apple' and the person guesses the 'p', the string would be '_pp__'
export default Word;