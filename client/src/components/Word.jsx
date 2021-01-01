import React, { useState } from 'react';
import LetterGuessForm from './LetterGuessForm.jsx';

class Word extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letter: '',
      wordDisplay: ''
    }
  }

  componentDidMount() {
    this.setState({
      wordDisplay: this.props.word.split('').map(char => {
        return '_';
      }).join(' ')
    })
  }

  handleSubmit(e, letter) {
    e.preventDefault();
    this.setState({letter: letter});
    let reg = new RegExp(`${letter}`, 'gi');
    let matches = this.props.word.match(reg);
    console.log(matches);
    if (matches === null) {
      changePic();
    } else {
      this.setState(prevState => {
        return {
          wordDisplay: prevState.wordDisplay.split('').map(char => {
            if (matches.includes(char)) {
              return char;
            } else {
              return '_';
            }
          }).join(' ')
        }
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.wordDisplay}
        <LetterGuessForm handleSubmit={this.handleSubmit.bind(this)} />
      </div>
    )
  }
};

// check user input to see if the word contains the letter
// change the string and put the character in place of the '_' anywhere it is
// i.e. if a word has 2 like 'apple' and the person guesses the 'p', the string would be '_pp__'
export default Word;