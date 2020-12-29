import React from 'react';
import axios from 'axios';
import HangmanPic from './components/HangmanPic.jsx';

const hangmanpics = ["https://hangman-pics.s3.us-east-2.amazonaws.com/empty.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/first_wrong_guess.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/second_wrong_guess.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/third_wrong_guess.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/fourth_wrong_guess.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/fifth_wrong_guess.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/sixth_wrong_guess.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/seventh_wrong_guess.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/eighth_wrong_guess.jpg"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPic: hangmanpics[0],
      words: []
    }
  }

  componentDidMount() {
    axios.get('/api/words/all')
      .then(res => {
        this.setState({
          words: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render () {
    return (
      <div>
        <h1>Hangman App!</h1>
        <HangmanPic pic={this.state.currentPic} />
      </div>
    )
  }
}


export default App;
