import React, { Component } from "react";
import * as API from "./utils/BookAPI";
import { Header } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Search from './components/Search/Search';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    API.getAll().then(data => {
      this.setState({ books: data });
    });
  }

  handleShelfChange = (book, shelf) => {
    API.update(book, shelf)
    API.getAll().then(data => {
      this.setState({books: data})
    })
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Header as='h1' textAlign='center'>
            MyReads
          </Header>
          <Switch>
            <Route path='/' exact render={() => <Main books={this.state.books} changeShelves={this.handleShelfChange} />} />
            <Route path='/search' render={() => <Search books={this.state.books} changeShelves={this.handleShelfChange} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}
