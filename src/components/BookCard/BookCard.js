import React, { Component } from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import BookDetails from "../BookDetails/BookDetails"
import BookDropdown from "../BookDropdown/BookDropdown";

export default class BookCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onShelfChange = (e, { value }) => {
    this.setState({ value });
    this.switchShelves();
  };

  switchShelves = shelf => {
    this.props.changeShelves(this.props.book, shelf);
  };

  render() {
    const { book, icon } = this.props;
    let authors = book.authors;
    if (Array.isArray(authors)) {
      authors = authors.toString()
    }
    
    return (
      <Card>
        <Card.Content>
          {book && book.imageLinks.smallThumbnail && (
            <Image
              
              src={book.imageLinks.smallThumbnail || ""}
              wrapped
              floated='right'
              size='mini'
            />
          )}
          <Card.Header>{book.title}</Card.Header>
          <Card.Meta>{book.subtitle}</Card.Meta>
          <Card.Description>
            <p>
              <span> <Icon circular name={icon} color='teal' /> </span> by {authors}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='card-action'>
            <BookDetails book={book} />
            <BookDropdown changeShelves={this.switchShelves} />
          </div>
        </Card.Content>
      </Card>
    );
  }
}
