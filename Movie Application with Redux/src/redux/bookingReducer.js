const initialState = {
  selectedMovie: null,
};

export const selectMovie = (movie) => ({ type: 'SELECT_MOVIE', payload: movie });

export default function bookingReducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_MOVIE': return { ...state, selectedMovie: action.payload };
    default: return state;
  }
}
