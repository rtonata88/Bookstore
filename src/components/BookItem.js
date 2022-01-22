import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';

const BookItem = ({ book, removeBook }) => {
  const { title, category } = book;
  return (
    <div className="card shadow-sm book-item">
      <div className="card-body">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <p className="book-category">{category}</p>
            <p className="book-title">{title}</p>
            <p className="book-author">Richard Chambula</p>
            <div className="d-flex justify-content-start align-items-center">
              <button
                type="button"
                className="btn btn-link book-links border-end border-end-1"
              >
                Comments
              </button>

              <button
                type="button"
                className="btn btn-link book-links border-end border-end-1 px-2"
                onClick={removeBook}
              >
                Remove
              </button>

              <button type="button" className="btn btn-link book-links px-2">
                Edit
              </button>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 border-end border-end-1">
            <ProgressBar />
          </div>
          <div className="col-md-3 col-sm-12">
            <p className="current-chapter">Current Chapter</p>
            <p className="current-lesson">Introduction</p>
            <button
              type="button"
              className="btn btn-primary btn-update-progress"
            >
              Update progress
            </button>
          </div>
        </div>
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
