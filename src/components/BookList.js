import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, getBookItemsFromApi } from '../redux/books/books';
import BookItem from './BookItem';

const BookList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookItemsFromApi());
  }, []);

  const removeBookFromStore = (bookId) => {
    const book = {
      id: bookId,
    };

    dispatch(removeBook(book));
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
