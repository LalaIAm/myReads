import React from "react";
import { Modal, Button, Image, Header } from "semantic-ui-react";

const BookDetails = ({ book }) => {
  return (
    <Modal trigger={<Button primary>Book Details</Button>}>
      <Modal.Header>{book.title}</Modal.Header>
      <Modal.Content>
        <Image
          wrapped
          floated='right'
          size='medium'
          src={book.imageLinks.thumbnail}
        />
        <Modal.Description>
          <Header as='h3'>{book.title}</Header>
          <Header as='h4'>{book.subtitle}</Header>
          <p>
            {book.publishedDate} {book.pageCount} pages
          </p>
          <p>{book.description}</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default BookDetails;
