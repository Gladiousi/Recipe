import { IRecipeItem } from "@/core/types/ComponentsTypes/ComponentsTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavoritesState {
  favorites: IRecipeItem[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (
      state,
      { payload: recipe }: PayloadAction<IRecipeItem>
    ) => {
      const isExist = state.favorites.some((r) => r.id === recipe.id);
      if (isExist) {
        state.favorites = state.favorites.filter(
          (item) => item.id !== recipe.id
        );
      } else {
        state.favorites.push(recipe);
      }
    },
  },
});

export const { actions, reducer } = favoritesSlice;
