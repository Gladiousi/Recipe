import { IRecipeItem } from "@/core/types/ComponentsTypes/ComponentsTypes";
import { useAction } from "@/hooks/useAction";
import { useFavorites } from "@/hooks/useFavorites";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosHeartDislike } from "react-icons/io";
import { Link } from "react-router-dom";

export const RecipeItem: React.FC<{ recipe: IRecipeItem }> = ( {recipe} ) => {
  const { favorites } = useFavorites();
  const { toggleFavorites } = useAction();
  const isExist = favorites.some((r: { id: number }) => r.id === recipe.id);

  return (
    <>
      {/* <a href=""> */}
      <div className="flex  bg-slate-300 rounded-lg flex-col p-5 m-auto hover:bg-slate-400 duration-300">
        <div>
          <img src="/public/IMG_1524.png" />
        </div>
        <div>
          <h2 className="">{recipe.title}</h2>
          <h3 className="">{recipe.description}</h3>
        </div>
        <button
          className="mt-5 bg-orange-600 rounded-lg p-2 text-white hover:opacity-70 duration-300 flex justify-center items-center gap-4"
          onClick={() => toggleFavorites(recipe)}
        >
          {isExist ? "remove from" : "add to"} favorites{" "}
          {isExist ? <IoIosHeartDislike /> : <FaHeart />}
        </button>
        <Link to={`/RecipeLog/${recipe.id}`} className="w-full">
          <button className="mt-5 w-full bg-orange-600 rounded-lg p-2 text-white hover:opacity-70 duration-300 flex justify-center items-center gap-4">
            Open recipe
          </button>
        </Link>
      </div>
      {/* </a> */}
    </>
  );
};
