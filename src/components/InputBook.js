import React from 'react';

const inputBook = () => (
  <form className="form-container">
    <input
      type="text"
      placeholder="Add Book..."
      className="input-text"
      name="title"
    />
    <button type="button" className="input-submit">
      Add Book
    </button>
  </form>
);

export default inputBook;
