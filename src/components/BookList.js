import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, getBooks } from '../redux/books/books';
import BookItem from './BookItem';

const BookList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const removeBookFromStore = (bookId) => {
    const book = {
      id: bookId,
    };

    dispatch(deleteBook(book));
  };

  const booksSelector = useSelector((state) => state.booksReducer);

  const books = booksSelector.map((book) => (
    <BookItem
      key={book.id}
      book={book}
      removeBook={() => removeBookFromStore(book.id)}
    />
  ));

  return <div className="bookList">{books}</div>;
};
export default BookList;
