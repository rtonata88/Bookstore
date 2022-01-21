import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const inputBook = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const submitBookToStore = () => {
    const newBook = {
      id: uuidv4(), // make sure it's unique
      title,
      category,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
    dispatch(postBook(newBook));
  };
  return (
    <form className='form-container'>
      <input
        type='text'
        placeholder='Title'
        className='input-text'
        name='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        placeholder='Category'
        className='input-text'
        name='category'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button
        type='button'
        className='input-submit'
        onClick={submitBookToStore}
      >
        Add Book
      </button>
    </form>
  );
};

export default inputBook;
