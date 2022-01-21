const APP_ID = 'n1i3Sr12LOBQ7bSgmbZC';
const BASE_API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const API_URL = `${BASE_API}/${APP_ID}/books`;

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBookItemsFromApi = async () => {
  const response = await fetch(API_URL);
  const bookItems = await response.json();
  return bookItems;
};

export const getBooks = () => async (dispatch) => {
  const bookItems = getBookItemsFromApi();
  bookItems.then((bookItem) => {
    Object.keys(bookItem).forEach((key) => {
      const bookId = { id: key };
      dispatch(addBook({ ...bookId, ...bookItem[key][0] }));
    });
  });
};

export const deleteBook = (book) => async (dispatch) => {
  await fetch(`${API_URL}/${book.id}`, {
    method: 'delete',
    body: JSON.stringify({
      item_id: book.id,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(dispatch(removeBook(book)));
};

export const postBook = (book) => async (dispatch) => {
  await fetch(API_URL, {
    method: 'post',
    body: JSON.stringify({
      title: book.title,
      item_id: book.id,
      category: book.category,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(dispatch(addBook(book)));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
