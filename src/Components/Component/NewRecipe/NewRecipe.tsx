import { IoCreate } from "react-icons/io5";
// tab create Recipe
export const NewRecipe = () => {
  return (
    <>
      <div>
        <a href="/CreateRecipe">
          <div className="flex justify-center items-center gap-6 bg-slate-300 rounded-lg h-[300px] flex-col p-5 m-auto hover:bg-slate-400 duration-300">
            <IoCreate className="w-12 h-12" />
            <a href="/CreateRecipe">
              <button className="bg-orange-600 p-2 rounded-lg hover:opacity-70 duration-300">
                Create new recipe
              </button>
            </a>
          </div>
        </a>
      </div>
    </>
  );
};
