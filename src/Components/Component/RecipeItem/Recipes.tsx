import { useFavorites } from "@/hooks/useFavorites";
import { RecipeItem } from "@/Components/Component/RecipeItem/RecipeItem";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IRecipeItem } from "../../../core/types/ComponentsTypes/ComponentsTypes";

export const Recipes: React.FC = () => {
  const { favorites } = useFavorites();
  const [recipes, setRecipes] = useState<IRecipeItem[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("src/db.json");
        const data = await response.json();
        setRecipes(data.recipes);
        console.log("Загруженные рецепты:", data.recipes);
      } catch (error) {
        console.error("Ошибка при загрузке рецептов:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="h-full">
      <div className="relative justify-end">
        <FaHeart className="w-12 h-12 absolute right-5 " />
        <div className="absolute right-12 top-4 bg-blue-800 p-1 rounded-lg text-2xl max-tablet:top-20 text-orange-400 font-bold">
          {favorites.length}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10 m-10 max-laptop:grid-cols-3 max-tablet:grid-cols-2 max-[600px]:grid-cols-1">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeItem key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
