// useFavorites.ts
import { useSelector } from "react-redux";
import { RootState } from "../core/store/store";

export const useFavorites = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  return { favorites };
};
