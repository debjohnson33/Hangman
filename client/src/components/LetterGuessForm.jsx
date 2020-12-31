import React from 'react';

class LetterGuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letter: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.value.length > 1) {
      alert('Only 1 letter at a time');
    }
    this.setState({
      letter: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();
    this.props.handleSubmit(e, this.state.letter);
    this.setState({
      letter: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <h2>Type in One Letter:</h2>
        <input
          type="text"
          name="letter"
          onChange={this.handleChange}
          value={this.state.letter}
        />
        <input type="submit" />
      </form>
    )
  }
}

export default LetterGuessForm;