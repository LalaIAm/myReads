import React, { Component } from "react";
import * as API from "./utils/BookAPI";
import { Switch, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Search from "./components/Search/Search";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      query: "",
    };
  }

  componentDidMount() {
    API.getAll().then(data => {
      this.setState({ books: data });
    });
  }

  handleShelfChange = (book, shelf) => {
    API.update(book, shelf);
    API.getAll().then(data => {
      this.setState({ books: data });
    });
  };

  updateQuery = query => {
    this.setState(() => ({
      query: query,
    }));
    API.search(this.state.query).then(data => {
      this.setState({
        foundBooks: data,
      });
    });
  };

  render() {
    return (
      <Switch>
        <Route
          path='/'
          exact
          render={() => (
            <Main
              books={this.state.books}
              changeShelves={this.handleShelfChange}
            />
          )}
        />
        <Route
          path='/search'
          render={() => (
            <Search
              books={this.state.foundBooks}
              changeShelves={this.handleShelfChange}
              updateQuery={this.updateQuery}
              query={this.state.query}
            />
          )}
        />
      </Switch>
    );
  }
}
