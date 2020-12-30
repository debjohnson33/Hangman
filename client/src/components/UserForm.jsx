import React from 'react';

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
      <form onSubmit={this.submit.bind(this)} >
        <p>Username:</p>
        <input
          type="text"
          name="username"
          value={this.state.user}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    )
  }
}

export default UserForm;
