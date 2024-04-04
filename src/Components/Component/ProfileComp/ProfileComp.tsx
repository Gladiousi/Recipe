import { SlArrowLeft } from "react-icons/sl";

export const ProfileComp = () => {
  return (
    <div className="bg-slate-600 w-screen h-screen">
      <a href="/Menu">
        <button className="absolute left-5 top-10 w-fit h-fit  bg-white p-5 rounded-full backdrop-blur-3xl bg-opacity-40 hover:bg-opacity-60 duration-300">
          <SlArrowLeft className="w-fit h-fit" />
        </button>
      </a>
      <div className="pt-28 mr-10 ml-10 text-5xl grid grid-cols-2 max-laptop:grid-cols-1 max-laptop:grid-rows-2">
        <div>
          <img src="/public/IMG_1524.png" className="max-w-[50%] min-w-[80%]" />
        </div>
        <div className="mt-10 flex justify-end max-laptop:justify-start">
          <p>Name</p>
        </div>
      </div>
      <div>
        <p className="flex justify-center items-center h-full w-full">
          Later...
        </p>
      </div>
    </div>
  );
};
