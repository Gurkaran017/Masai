import axios from 'axios';

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

export const fetchMovies = () => async (dispatch) => {
  dispatch({ type: 'MOVIES_LOADING' });
  try {
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY');
    dispatch({ type: 'MOVIES_SUCCESS', payload: res.data.results });
  } catch (err) {
    dispatch({ type: 'MOVIES_ERROR', payload: err });
  }
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case 'MOVIES_LOADING': return { ...state, loading: true };
    case 'MOVIES_SUCCESS': return { ...state, loading: false, movies: action.payload };
    case 'MOVIES_ERROR': return { ...state, loading: false, error: action.payload };
    default: return state;
  }
}
