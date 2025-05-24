const initialState = [];

export const addToWatchlist = (movie) => ({ type: 'ADD_WATCHLIST', payload: movie });
export const removeFromWatchlist = (id) => ({ type: 'REMOVE_WATCHLIST', payload: id });

export default function watchlistReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_WATCHLIST': return [...state, action.payload];
    case 'REMOVE_WATCHLIST': return state.filter(movie => movie.id !== action.payload);
    default: return state;
  }
}
