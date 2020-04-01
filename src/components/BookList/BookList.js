import React from "react";
import { Container, Header, Card } from "semantic-ui-react";
import BookCard from "../BookCard/BookCard";
import PropTypes from 'prop-types';

class BookList extends React.Component {


  render() {
    const { changeShelves, shelf } = this.props;
  
    if (!this.props.books) {
      return <p>Search books to find new reads</p>
    }

    const books = Array.from(this.props.books);
    return (
      <Container>
        <Header as='h3' textAlign='center'>
          {shelf}
        </Header>
        <Container>
          <Card.Group itemsPerRow={1}>
            {books.map((book, index) => {
              return <BookCard icon={this.props.icon || 'check'} book={book} key={book.id} changeShelves={changeShelves} />
            })}
          </Card.Group>
        </Container>
      </Container>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelves: PropTypes.func.isRequired,
  shelf: PropTypes.string
}

export default BookList;
