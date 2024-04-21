import { NewRecipe } from "@/Components/Component/NewRecipe/NewRecipe";
import { Foter } from "@/Components/Layout/Foter/Foter";
import { Header } from "@/Components/Layout/Menu/Header";
import LikeRecipeTypes from "@/core/types/ComponentsTypes/LikeRecipeTypes";

const Recipe: React.FC = () => {

  return (
    <>
      <Header />
      <div className="grid grid-cols-4 gap-10 m-10 max-laptop:grid-cols-3 max-tablet:grid-cols-2 max-[600px]:grid-cols-1 h-fit">
        <NewRecipe />
      </div>
      <div className="grid grid-cols-4 gap-10 m-10 max-laptop:grid-cols-3 max-tablet:grid-cols-2 max-[600px]:grid-cols-1 h-screen">
        <LikeRecipeTypes />
      </div>
      <Foter />
    </>
  );
};

export { Recipe };
