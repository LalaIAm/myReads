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
    })
  };

  getFutureReads = () => {
    return this.props.books.filter(book => {
      return book.shelf === "wantToRead";
    });
  };

  
  
  render() {
    return (
      <div>
        <Header as='h2' textAlign='center'>
          MyShelves
        </Header>
        <Grid padded columns={3} divided>
          <Grid.Row>
            <Grid.Column>
               <BookList
                changeShelves={this.props.changeShelves}
                books={this.getFutureReads()}
                shelf={"Future Reads"}/>
            </Grid.Column>
            <Grid.Column>
              <BookList
                changeShelves={this.props.changeShelves}
                books={this.getCurrentReads()}
                shelf={"Current Reads"}
              />
            </Grid.Column>
            <Grid.Column>
             
              <BookList
                changeShelves={this.props.changeShelves}
                books={this.getPastReads()}
                shelf={"Past Reads"}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
