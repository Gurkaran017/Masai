// src/redux/reducer.js
const initialState = {
  coffees: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_REQUEST":
      return { ...state, isLoading: true };
    case "FETCH_SUCCESS":
      return { ...state, isLoading: false, coffees: payload };
    case "FETCH_FAILURE":
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default reducer;
