import React from 'react';
import InputBook from './InputBook';
import BookList from './BookList';

const BooksContainer = () => (
  <div className="container">
    <div className="inner">
      <BookList />
      <InputBook />
    </div>
  </div>
);

export default BooksContainer;
