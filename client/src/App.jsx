import React from 'react';
import axios from 'axios';
import HangmanPic from './components/HangmanPic.jsx';
import Word from './components/Word.jsx';
import UserForm from './components/UserForm.jsx';

const hangmanpics = ["https://hangman-pics.s3.us-east-2.amazonaws.com/empty.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/first_wrong_guess.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/second_wrong_guess.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/third_wrong_guess.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/fourth_wrong_guess.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/fifth_wrong_guess.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/sixth_wrong_guess.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/seventh_wrong_guess.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/eighth_wrong_guess.jpg"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPic: hangmanpics[0],
      words: [],
      currentUser: {}
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

  onSubmit(e, username) {
    console.log(username);
    const user = {username: username, score: 0};
    e.preventDefault();
    axios.post(`http://localhost:3000/api/users/${username}`, user)
      .then(res => {
        console.log(res);
        this.setState({
          currentUser: user
        });
      })
      .catch(err => {
        window.alert(`${username} already exists`);
        console.error('There was an error: ', err);
      })

  }

  render () {
    let word;
    if (this.state.words && this.state.words.length > 0) {
      word = this.state.words[0].word;
    }
    return (
      <div>
        <h1>Hangman App!</h1>
        <HangmanPic pic={this.state.currentPic} />
        <UserForm onSubmit={this.onSubmit.bind(this)} />
        <Word word={word || 'Loading...'} />
      </div>
    )
  }
}

export default App;
