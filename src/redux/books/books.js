const APP_ID = 'n1i3Sr12LOBQ7bSgmbZC';
const BASE_API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const API_URL = `${BASE_API}/${APP_ID}/books`;

const POST_BOOK = 'bookStore/books/POST_BOOK';
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

export const postBook = (payload) => ({
  type: POST_BOOK,
  payload,
});

export const getBooks = async () => {
  const response = await fetch(API_URL);
  const bookItems = await response.json();
  return bookItems;
};

export const getBookItemsFromApi = () => async (dispatch) => {
  const bookItems = getBooks();
  bookItems.then((bookItem) => {
    Object.keys(bookItem).forEach((key) => {
      const bookId = { id: key };
      dispatch(addBook({ ...bookId, ...bookItem[key][0] }));
    });
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      fetch(`${API_URL}/${action.payload.id}`, {
        method: 'delete',
        body: JSON.stringify({
          item_id: action.payload.id,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return state.filter((book) => book.id !== action.payload.id);
    case POST_BOOK:
      fetch(API_URL, {
        method: 'post',
        body: JSON.stringify({
          title: action.payload.title,
          item_id: action.payload.id,
          category: action.payload.category,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
