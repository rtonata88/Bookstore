import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const inputBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const submitBookToStore = () => {
    const newBook = {
      id: uuidv4(), // make sure it's unique
      title,
      author,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
  };
  return (
    <form className="form-container">
      <input
        type="text"
        placeholder="Title"
        className="input-text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        className="input-text"
        name="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button
        type="button"
        className="input-submit"
        onClick={submitBookToStore}
      >
        Add Book
      </button>
    </form>
  );
};

export default inputBook;
