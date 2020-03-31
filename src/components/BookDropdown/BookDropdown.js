import React, { Component } from "react";
import { Button } from "semantic-ui-react";


export default class BookDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
      event.preventDefault();
      this.props.switchShelves(this.state.value)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value=''>Shelf</option>
          <option value='read'>Past Read</option>
          <option value='currentlyReading'>Current Read</option>
          <option value='wantToRead'>Future Read</option>
        </select>
        <Button type='submit'>Switch Shelves</Button>
      </form>
    );
  }
}
