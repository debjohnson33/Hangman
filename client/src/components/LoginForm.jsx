import React from 'react';
import styles from '../style.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      user: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();
    this.props.onLogin(e, this.state.user);
    this.setState({
      user: ''
    });
  }

  signUp(e) {
    e.preventDefault();
    this.props.onSignUp(e);
  }

  render() {
    return (
      <div className={styles.login}>
        <form onSubmit={this.submit.bind(this)} >
          <input
            id="username"
            type="text"
            name="username"
            placeholder="username"
            value={this.state.user}
            onChange={this.handleChange}
          />
          <input className={styles.btn} type="submit" value="Login" />
        </form>
        <button className={styles.btn} onClick={this.signUp.bind(this)}>Signup</button>
      </div>
    )
  }
}

export default LoginForm;
