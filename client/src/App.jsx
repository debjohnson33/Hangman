import React from 'react';
import axios from 'axios';
import HangmanPic from './components/HangmanPic.jsx';
import Word from './components/Word.jsx';
import UserForm from './components/UserForm.jsx';
import LoginForm from './components/LoginForm.jsx';

const hangmanpics = ["https://hangman-pics.s3.us-east-2.amazonaws.com/empty.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/first_wrong_guess.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/second_wrong_guess.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/third_wrong_guess.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/fourth_wrong_guess.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/fifth_wrong_guess.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/sixth_wrong_guess.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/seventh_wrong_guess.jpg", "https://hangman-pics.s3.us-east-2.amazonaws.com/eighth_wrong_guess.jpg"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPic: hangmanpics[0],
      words: [],
      currentUser: {},
      signUpClicked: false,
      currentScore: 0
    }
    this.signUpClick = this.signUpClick.bind(this);
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
    axios.post(`/api/users/${username}`, user)
      .then(res => {
        console.log(res);
        this.setState({
          currentUser: user,
          signUpClicked: false
        });
      })
      .catch(err => {
        window.alert(`${username} already exists`);
        console.error('There was an error: ', err);
      })
  }

  onLogin(e, username) {
    e.preventDefault();
    axios.get(`/api/users/${username}`)
     .then(res => {
       console.log(res.data);
       this.setState({
         currentUser: res.data
       })
     })
     .catch(err => {
       console.error('There was an error: ', err);
     })
  }

  signUpClick() {
    this.setState({
      signUpClicked: true
    });
  }

  changePic() {
    this.setState(prevState => {
      let index = hangmanpics.indexOf(prevState.currentPic);
      if (index === 8) {
        // axios request to db to update score
        //   pull score of user
        //   check if score from db is less than current score
        //     yes, then update db score for user
        //     no, don't update
        // trigger end of play for this word -- render Loser component
      } else {
        return {
          ...prevState,
          currentPic: hangmanpics[index + 1]
        }
      }
    })
  }

  changeScore() {
    this.setState(prevState => {
        return {
          ...prevState,
          currentScore: prevState.currentScore + 1
        }
      }
    );
  }

  triggerWinner() {
    axios.get(`/api/users/${this.state.currentUser.username}/score`)
      .then(res => {
        if (this.state.currentScore > res.data.score) {
          return axios.put(`/api/users/${this.state.currentUser.username}/${this.state.currentUser.score}`)
        }
      })
      .then(res => {
        console.log('Updated score in db', res);
      })
      .catch(err => {
        console.log(err);
      })
    // render modal to say "You win!" and give options
  }

  render () {
    let word;
    if (this.state.words && this.state.words.length > 0) {
      word = this.state.words[0].word;
    }
    let signUpClicked = this.state.signUpClicked;
    let user = this.state.currentUser;
    const renderUserLogin = () => {
      if (signUpClicked) {
        return <UserForm onSubmit={this.onSubmit.bind(this)} />
      } else if (Object.keys(this.state.currentUser).length === 0) {
        return <LoginForm onLogin={this.onLogin.bind(this)} />
      } else {
        return <div>User: {user.username}  Score: {this.state.currentScore}</div>
      }
    }
    const renderWord = () => {
      if (!(Object.keys(this.state.currentUser).length === 0)) {
        return <Word word={word || 'Loading...'} changePic={this.changePic.bind(this)} changeScore={this.changeScore.bind(this)} triggerWinner={this.triggerWinner.bind(this)} />
      }
    }
    return (
      <div>
        <h1>Hangman App!</h1>
        {renderUserLogin()}
        {(Object.keys(this.state.currentUser).length === 0) &&
        (<div>If you do not have a username click here:
        <button onClick={this.signUpClick}>Signup</button></div>)
        }
        <HangmanPic pic={this.state.currentPic} />
        {renderWord()}
      </div>
    )
  }
}

export default App;
