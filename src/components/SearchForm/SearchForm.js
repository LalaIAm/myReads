import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

export default class SearchForm extends Component {
  state = {
    query: "",
  };

  handleQueryChange = event => {
    this.setState({ query: event.target.value });
    this.props.updateQuery(this.state.query);
  };

  render() {
    return (
      <div className='form'>
        <Form>
          <Form.Input
            type='text'
            onChange={this.handleQueryChange}
            placeholder='Search...'
            className='search-books'
            value={this.state.query}
          />
        </Form>
      </div>
    );
  }
}
