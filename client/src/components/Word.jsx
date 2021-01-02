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

  getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++) {
      if (arr[i].toLowerCase() === val.toLowerCase()) {
        indexes.push(i);
      }
    }
    return indexes;
  }

  putLetterIn(arr, val) {
    let indexes = this.getAllIndexes(this.props.word.split(''), val);
    indexes.forEach(index => arr[index] = val);
    return arr.join(' ');
  }

  handleSubmit(e, letter) {
    e.preventDefault();
    this.setState({letter: letter});
    let reg = new RegExp(`${letter}`, 'gi');
    let matches = this.props.word.match(reg);
    let indexes = this.getAllIndexes(this.props.word.split(''), letter);
    // find indexes in word of each match
    if (matches === null) {
      this.props.changePic();
    } else {
      this.setState(state => {
        return {
          wordDisplay: this.putLetterIn(state.wordDisplay.split(' '), letter)
        }
      });
      this.props.changeScore();
    }
  }

  render() {
    return (
      <div>
        {this.state.wordDisplay}
        {(this.state.wordDisplay === this.props.word.split('').join(' ').toLowerCase()) &&
          this.props.triggerWinner()
        }
        <LetterGuessForm handleSubmit={this.handleSubmit.bind(this)} />
      </div>
    )
  }
};

// check user input to see if the word contains the letter
// change the string and put the character in place of the '_' anywhere it is
// i.e. if a word has 2 like 'apple' and the person guesses the 'p', the string would be '_pp__'
export default Word;