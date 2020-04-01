import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      loading: false,
    };
  }

  handleChange = event => {
    let newQuery = event.target.value;

    this.setState({ query: newQuery });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });
    this.props.searchBooks(this.state.query);
    this.setState({loading: false})
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          type='text'
          onChange={this.handleChange}
          loading={this.state.loading}
          placeholder='Search...'
        />
        <Button>Search</Button>
      </Form>
    );
  }
}
