// store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  reducer as favoritesReducer,
  FavoritesState,
} from "@/core/store/favorites/favorites.slice";

const reducers = combineReducers({ favorites: favoritesReducer });

export type RootState = {
  favorites: FavoritesState;
};

export default configureStore({
  reducer: reducers,
  devTools: true,
});
