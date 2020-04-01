import React, { Component } from "react";
import BookList from "../BookList/BookList";
import { Header } from "semantic-ui-react";
import SearchForm from "../SearchForm/SearchForm";

export default class Search extends Component {
  render() {
    return (
      <div className='page'>
        <Header as='h2' textAlign='center'>
          Search
        </Header>
        <SearchForm
          query={this.props.query}
          updateQuery={this.props.updateQuery}
        />
        <BookList
          books={this.props.books}
          booksInRow={6}
          changeShelves={this.props.changeShelves}
        />
      </div>
    );
  }
}
