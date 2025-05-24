const initialState = {
  favorites: []
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      const exists = state.favorites.find(match => match.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          favorites: state.favorites.filter(m => m.id !== action.payload.id)
        };
      } else {
        return {
          ...state,
          favorites: [...state.favorites, action.payload]
        };
      }
    default:
      return state;
  }
};
