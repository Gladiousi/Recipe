import { RecipeLogComp } from "@/Components/Component/RecipeLogComp/RecipeLogComp";

const RecipeLog: React.FC = () => {
  return (
    <>
      <RecipeLogComp
        recipe={{
          id: 1,
          title: "Goat",
          description:
            "delitions Goat ьалвьмкуьуцм выдмьлдьмукцmcpweockwepockewpccpwe,p Goat ьалвьмкуьуцм выдмьлдьмукцmcpweockwepockewpccpwe,p",
        }}
      />
    </>
  );
};

export default RecipeLog;
