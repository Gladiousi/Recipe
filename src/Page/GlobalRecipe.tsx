import { Foter } from "@/Components/Layout/Foter/Foter";
import { Header } from "@/Components/Layout/Menu/Header";
import { Recipes } from "@/Components/Component/RecipeItem/Recipes";

const GlobalRecipe: React.FC = () => {
  return (
    <>
      <Header />
      <Recipes />
      <Foter />
    </>
  );
};

export default GlobalRecipe;
