import React, { Component } from "react";
import BookList from "../BookList/BookList";
import { Header, Grid } from "semantic-ui-react";

export default class Main extends Component {
  getPastReads = () => {
    return this.props.books.filter(book => {
      return book.shelf === "read";
    });
  };

  getCurrentReads = () => {
    return this.props.books.filter(book => {
      return book.shelf === "currentlyReading";
    });
  };

  getFutureReads = () => {
    return this.props.books.filter(book => {
      return book.shelf === "wantToRead";
    });
  };

  render() {
    return (
      <div className='page'>
        <Header as='h2' textAlign='center'>
          MyShelves
        </Header>
        <Grid padded columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <BookList
                changeShelves={this.props.changeShelves}
                books={this.getFutureReads()}
                shelf={"Future Reads"}
                booksInRow={3}
                icon={"calendar check outline"}
              />
            </Grid.Column>
            <Grid.Column>
              <BookList
                changeShelves={this.props.changeShelves}
                books={this.getCurrentReads()}
                shelf={"Current Reads"}
                booksInRow={3}
                icon='book'
              />
            </Grid.Column>
            <Grid.Column>
              <BookList
                changeShelves={this.props.changeShelves}
                books={this.getPastReads()}
                shelf={"Past Reads"}
                booksInRow={3}
                icon={"paper plane outline"}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
