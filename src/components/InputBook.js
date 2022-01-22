import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';

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
    // dispatch(addBook(newBook));
    dispatch(postBook(newBook));
  };
  return (
    <div className="row">
      <div className="bg-light">
        <div className="card-body">
          <form>
            <div className="row">
              <p className="add-book-title">Add new book</p>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Title"
                  className="form-control"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <select
                  name="category"
                  className="form-control"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Fiction">Fiction</option>
                  <option value="Romance">Romance</option>
                  <option value="Action">Action</option>
                  <option value="Business">Business</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Technology">Technology</option>
                </select>
              </div>
              <div className="col-md-2">
                <button
                  type="button"
                  className="btn btn-primary btn-update-progress"
                  onClick={submitBookToStore}
                >
                  Add Book
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default inputBook;
