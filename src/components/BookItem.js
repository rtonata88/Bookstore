import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ book, removeBook }) => {
  // const keys =

  const { title, category } = book;
  return (
    <div className='card shadow-sm book-item'>
      <div className='card-body'>
        <div className='col-md-5 col-sm-12'>
          <p className='book-category'>{category}</p>
          <p className='book-title'>{title}</p>
          <p className='book-author'>Richard Chambula</p>
          <div className='d-flex justify-content-start align-items-center'>
            <button
              type='button'
              className='btn btn-link book-links border-end border-end-1'
            >
              Comments
            </button>

            <button
              type='button'
              className='btn btn-link book-links border-end border-end-1 px-2'
              onClick={removeBook}
            >
              Remove
            </button>

            <button type='button' className='btn btn-link book-links px-2'>
              Edit
            </button>
          </div>
        </div>
        <div className='col-md-4 col-sm-12'></div>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default BookItem;
