import React, { useState } from 'react';
import LetterGuessForm from './LetterGuessForm.jsx';

const Word = ({word, changePic}) => {
  let wordDisplay = word.split('').map(char => {
    return '_';
  }).join(' ');
  console.log(typeof wordDisplay);
  const [letter, setLetter] = useState('');
  const [display, setDisplay] = useState(wordDisplay);

  const handleSubmit = (e, letter) => {
    e.preventDefault();
    setLetter(letter);
    let reg = new RegExp(`${letter}`, 'gi');
    let matches = word.match(reg);
    console.log(matches);
    if (matches === null) {
      changePic();
    } else {
      // wordDisplay = display.split('').map((char, index) => {
      //   if (matches.includes(char)) {
      //     return char;
      //   } else {
      //     return '_';
      //   }
      // }).join(' ');
      setDisplay(display => {
        return display.split(' ').map(char => {
          if (matches.includes(char)) {
            return char;
          } else {
            return '_';
          }
        }).join(' ');
      });
      console.log('Line 38: ', display);
    }
  }

  return (
    <div>
      {display}
      <LetterGuessForm handleSubmit={handleSubmit} />
    </div>
  )
};

// check user input to see if the word contains the letter
// change the string and put the character in place of the '_' anywhere it is
// i.e. if a word has 2 like 'apple' and the person guesses the 'p', the string would be '_pp__'
export default Word;