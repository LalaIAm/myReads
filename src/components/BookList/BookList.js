import React from "react";
import { Container, Header, Card } from "semantic-ui-react";
import BookCard from "../BookCard/BookCard";

const BookList = ({ shelf, books, changeShelves, booksInRow }) => {
  return (
    <Container>
      <Header as='h3' textAlign='center'>
        {shelf}
      </Header>
      <Container>
        <Card.Group itemsPerRow={1}>
          {books.length > 1 &&
            books.map((book, index) => {
              return (
                <BookCard
                  changeShelves={changeShelves}
                  book={book}
                  key={index}
                />
              );
            })}
          {books.length === 1 && (
            <BookCard changeShelves={changeShelves} book={books} />
          )}
        </Card.Group>
      </Container>
    </Container>
  );
};

export default BookList;
