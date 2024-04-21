import { IRecipeItem } from "@/core/types/ComponentsTypes/ComponentsTypes";

export const RecipeLogComp: React.FC<{recipe: IRecipeItem}> = ({recipe}) => {
  return (
    <>
      <div className="h-screen">
        <h1>{recipe.id}</h1>
      </div>
    </>
  );
};
