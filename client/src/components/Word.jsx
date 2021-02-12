import React, { useState } from 'react';
import LetterGuessForm from './LetterGuessForm.jsx';
import styles from '../style.css'

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

  checkIfWinner() {
    this.props.isWinner(this.state.wordDisplay);
  }

  handleSubmit(e, letter) {
    e.preventDefault();
    this.setState({letter: letter});
    let reg = new RegExp(`${letter}`, 'gi');
    let matches = this.props.word.match(reg);
    let indexes = this.getAllIndexes(this.props.word.split(''), letter);
    if (matches === null) {
      this.props.changePic();
    } else {
      this.setState({wordDisplay: this.putLetterIn(this.state.wordDisplay.split(' '), letter)}, () => {
        this.checkIfWinner();
      }
      );
      this.props.changeScore();
    }
  }

  render() {
    return (
      <div className={styles.wordContainer} >
        <p className={styles.word} >
          {this.state.wordDisplay}
        </p>
        <LetterGuessForm handleSubmit={this.handleSubmit.bind(this)} />
      </div>
    )
  }
};

export default Word;