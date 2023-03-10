import { Component } from 'react';

export class Form extends Component {
  state = {
    value: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
    this.reset();
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  reset = () => {
    this.setState({
      value: '',
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
          placeholder="Search..."
        />
        <button>Search</button>
      </form>
    );
  }
}
