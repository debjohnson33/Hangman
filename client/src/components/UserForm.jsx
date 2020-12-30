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

  render() {
    return (
      <form>
        <p>Username:</p>
        <input
          type="text"
          name="username"
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    )
  }
}

export default UserForm;
