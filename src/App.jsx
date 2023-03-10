import { Form } from 'components/Form';
import { Component } from 'react';
import { getImages } from 'api/api';

export class App extends Component {
  state = {
    searchUser: '',
    images: [],
    loading: false,
    error: null,
  };

  handleFormSubmit = (searchUser) => {
    this.setState({
      searchUser,
    });
  };

  componentDidUpdate(_, prevState) {
    if (prevState.searchUser !== this.state.searchUser) {
      this.setState({ loading: true });
      this.setState({ images: [] });
      setTimeout(() => {
        getImages(this.state.searchUser)
          .then((response) => this.setState({ images: response.data.hits }))
          .catch((error) => this.setState({ error: error.message }))
          .finally(this.setState({ loading: false }));
      }, 2000);
    }
  }

  render() {
    const { images, loading, error } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleFormSubmit} />
        {loading && <h1>Loading...</h1>}
        {images.map((image) => (
          <li key={image.id}>
            <img src={image.webformatURL} alt={image.tags} />
          </li>
        ))}
        {error && <h1>Все пропало!</h1>}
      </div>
    );
  }
}
