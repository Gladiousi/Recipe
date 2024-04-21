import { RecipeItem } from "@/Components/Component/RecipeItem/RecipeItem";
import { useEffect, useState } from "react";
import { IRecipeItem } from "../../../core/types/ComponentsTypes/ComponentsTypes";

const RecipeList: React.FC = () => {
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
    <>
      {recipes.length > 0 ? (
        recipes.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default RecipeList;
