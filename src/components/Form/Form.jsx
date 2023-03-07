import { Component } from 'react';

export class Form extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    if (email === '' || password === '') {
      alert('Please, input text!');
      return;
    }
    this.reset();
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={this.handleChange}
            placeholder="Email"
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={this.handleChange}
            placeholder="Password"
          />
        </label>

        <button type="submit">Send</button>
      </form>
    );
  }
}
