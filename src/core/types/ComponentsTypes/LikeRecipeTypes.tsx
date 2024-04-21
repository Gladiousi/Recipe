import { useEffect, useState } from "react";
import { IRecipeItem } from "../../../core/types/ComponentsTypes/ComponentsTypes";
import { RecipeItem } from "@/Components/Component/RecipeItem/RecipeItem";
import { useFavorites } from "@/hooks/useFavorites";

const LikeRecipeTypes: React.FC = () => {
  const { favorites } = useFavorites();
  const [favoriteRecipes, setFavoriteRecipes] = useState<IRecipeItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("src/db.json");
        const data = await response.json();
        setFavoriteRecipes(
          data.recipes.filter((recipe: IRecipeItem) =>
            favorites.some((fav) => fav.id === recipe.id)
          )
        );
        setLoading(false);
      } catch (error) {
        console.error("Ошибка при загрузке рецептов:", error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [favorites]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {favoriteRecipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </>
  );
};

export default LikeRecipeTypes;
