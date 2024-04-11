import { NewRecipe } from "@/Components/Component/NewRecipe/NewRecipe";
import { RecipeItem } from "@/Components/Component/RecipeItem/RecipeItem";
// import { RecipeItem } from "@/Components/Component/RecipeItem/PecipeItem";
import { Foter } from "@/Components/Layout/Foter/Foter";
import { Header } from "@/Components/Layout/Menu/Header";

const Recipe: React.FC = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-4 gap-10 m-10 max-laptop:grid-cols-3 max-tablet:grid-cols-2 max-[600px]:grid-cols-1 h-fit">
        <NewRecipe />
        {/* <RecipeItem  /> */}
      </div>
      <div className="grid grid-cols-4 gap-10 m-10 max-laptop:grid-cols-3 max-tablet:grid-cols-2 max-[600px]:grid-cols-1 h-full">
        <RecipeItem
          recipe={{
            id: 1,
            title: "Goat",
            description: "delitions Goat",
          }}
        />
      </div>
      <Foter />
    </>
  );
};

export { Recipe };
