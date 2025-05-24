export const ADD_BOOK = "ADD_BOOK";
export const DELETE_BOOK = "DELETE_BOOK";
export const MARK_AS_READ = "MARK_AS_READ";
export const UPDATE_BOOK = "UPDATE_BOOK";
export const SET_FILTER = "SET_FILTER";

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const deleteBook = (id) => ({ type: DELETE_BOOK, payload: id });
export const markAsRead = (id) => ({ type: MARK_AS_READ, payload: id });
export const updateBook = (book) => ({ type: UPDATE_BOOK, payload: book });
export const setFilter = (filterType, value) => ({
  type: SET_FILTER,
  payload: { filterType, value },
});
