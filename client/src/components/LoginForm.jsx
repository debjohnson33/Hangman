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

  render() {
    return (
      <div className={styles.login}>
        <form onSubmit={this.submit.bind(this)} >
          <p>Username:</p>
          <input
            id="username"
            type="text"
            name="username"
            value={this.state.user}
            onChange={this.handleChange}
          />
          <input className={styles.btn} type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default LoginForm;
