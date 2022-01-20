import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import BookItem from './BookItem';

const BookList = () => {
  const dispatch = useDispatch();

  const removeBookFromStore = (bookId) => {
    const book = {
      id: bookId,
    };

    dispatch(removeBook(book));
  };

  const books = useSelector((state) => state.booksReducer);
  const bookList = books.map((book) => (
    <BookItem
      key={book.id}
      book={book}
      removeBook={() => removeBookFromStore(book.id)}
    />
  ));

  return <div className="bookList">{bookList}</div>;
};
export default BookList;
