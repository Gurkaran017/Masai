import { ADD_BOOK, DELETE_BOOK, MARK_AS_READ, UPDATE_BOOK } from "../actions/bookActions";
import { v4 as uuidv4 } from "uuid";

const initialState = [];

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, { ...action.payload, id: uuidv4(), status: "unread" }];
    case DELETE_BOOK:
      return state.filter(book => book.id !== action.payload);
    case MARK_AS_READ:
      return state.map(book =>
        book.id === action.payload ? { ...book, status: "read" } : book
      );
    case UPDATE_BOOK:
      return state.map(book =>
        book.id === action.payload.id ? { ...book, ...action.payload } : book
      );
    default:
      return state;
  }
};
