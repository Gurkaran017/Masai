import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { matchReducer } from "./matchReducer";
import { favoritesReducer } from "./favoritesReducer";

const rootReducer = combineReducers({
  matches: matchReducer,
  favorites: favoritesReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
