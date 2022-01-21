import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ book, removeBook }) => {
  // const keys =

  const { title, category } = book;
  return (
    <div className="bookItem">
      <p>
        {title}
        {' '}
        -
        <i>{category}</i>
      </p>
      <button type="button" onClick={removeBook}>
        Remove
      </button>
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
