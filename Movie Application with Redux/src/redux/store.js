import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './authReducer';
import moviesReducer from './moviesReducer';
import watchlistReducer from './watchlistReducer';
import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  movies: moviesReducer,
  watchlist: watchlistReducer,
  booking: bookingReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export default store;
