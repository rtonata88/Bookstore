import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookItem = () => {
  const dispatch = useDispatch();

  const removeBookFromStore = (bookId) => {
    const book = {
      id: bookId,
    };

    dispatch(removeBook(book));
  };

  return (
    <div className="bookItem">
      <span>Book name</span>
      <button type="button" onClick={removeBookFromStore(777)}>
        Remove
      </button>
    </div>
  );
};

export default BookItem;
