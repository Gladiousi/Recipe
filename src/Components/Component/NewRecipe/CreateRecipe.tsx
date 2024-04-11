import { Link } from "react-router-dom";

export const CreateRecipe = () => {
  return (
    <>
      <div className="h-screen w-full mt-16">
        <div className="grid grid-cols-2 max-laptop:grid-cols-1">
          <div className="flex items-center justify-center">
            <img src="/public/IMG_1524.png" className="w-[80%] " />
          </div>
          <div className="flex items-start flex-col m-10 gap-5 max-laptop:justify-center">
            <input
              type="text"
              className="p-5 text-2xl w-[50%]"
              placeholder="title"
            />
            <input
              type="text"
              className="p-5 text-xl w-[50%] h-full overscroll-x-contain"
              placeholder="description"
            />
            <div className="w-full flex items-end h-full justify-start">
              <Link to="/Recipe" className="w-[50%]  max-laptop:w-full">
                <button className="w-full bg-orange-400 rounded-lg p-2">
                  Create Recipe
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
