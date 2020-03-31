import React from 'react';
import { Container, Header, Card } from 'semantic-ui-react';
import BookCard from '../BookCard/BookCard';

const BookList = ({shelf, books, changeShelves}) => {
    return (
        <Container >
            <Header as='h3' textAlign='center'>{shelf}</Header>
            <Container>
                <Card.Group itemsPerRow='3'>
                    {books.map((book, index) => {
                        return <BookCard changeShelves={changeShelves} book={book} key={index} />
                    })}
                </Card.Group>
            </Container>
        </Container>
    );
};

export default BookList;