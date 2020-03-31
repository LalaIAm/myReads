import React, { Component } from "react";
import { Card, Image, Dropdown } from "semantic-ui-react";
import BookDetails from "../BookDetails/BookDetails";
import * as API from '../../utils/BookAPI';
import BookDropdown from '../BookDropdown/BookDropdown';


export default class BookCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onShelfChange = (e, { value }) => {
    this.setState({ value })
    this.switchShelves()
  }

  switchShelves = shelf => {
    this.props.changeShelves(this.props.book, shelf);
  }

  render() {
      const book = this.props.book;
      const value = this.state;
    return (
      <Card raised>
        {this.props.book.imageLinks.smallThumbnail && (
          <Image
            fluid={true}
            src={this.props.book.imageLinks.smallThumbnail || ""}
            wrapped
          />
        )}
        <Card.Content>
          <Card.Header>{book.title}</Card.Header>
          <Card.Meta>{book.subtitle}</Card.Meta>
          <Card.Description>
            <p>by {book.authors} </p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <BookDetails book={book} />
         <BookDropdown switchShelves={this.switchShelves} />
        </Card.Content>
      </Card>
    );
  }
}
