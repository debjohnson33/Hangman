import React from 'react';
import styles from '../style.css';

class UserForm extends React.Component {
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
    this.props.onSubmit(e, this.state.user);
    this.setState({
      user: ''
    });
  }

  render() {
    return (
      <div className={styles.user}>
        <form onSubmit={this.submit.bind(this)} >
          <input
            id="newuser"
            type="text"
            name="username"
            placeholder="New Username"
            value={this.state.user}
            onChange={this.handleChange}
          />
          <input className={styles.btn} type="submit" />
        </form>
      </div>
    )
  }
}

export default UserForm;
