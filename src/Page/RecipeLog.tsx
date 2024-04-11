import { RecipeLogComp } from "@/Components/Component/RecipeLogComp/RecipeLogComp";
import { Foter } from "@/Components/Layout/Foter/Foter";
import { Menu } from "@/Page/Menu";

const RecipeLog: React.FC = () => {
  return (
    <>
      <Menu />
      <RecipeLogComp  />
      <Foter />
    </>
  );
};

export default RecipeLog;