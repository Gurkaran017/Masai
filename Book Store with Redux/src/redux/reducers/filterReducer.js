import { SET_FILTER } from "../actions/bookActions";

const initialState = {
  author: "",
  genre: "",
  status: "",
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, [action.payload.filterType]: action.payload.value };
    default:
      return state;
  }
};
