import { useState, useEffect } from "react";

export const Hero = () => {
  const [text, setText] = useState<string>("");
  const phrase: string = " Тестовый проект для рецептов ";

  useEffect(() => {
    let animateTimeout: NodeJS.Timeout;

    const animate = (index: number) => {
      if (index < phrase.length) {
        setText((prevText) => prevText + phrase[index]);
        animateTimeout = setTimeout(() => animate(index + 1), 100);
      } else {
        setTimeout(clearText, 2000);
      }
    };

    const clearText = (index: number = phrase.length - 1) => {
      if (index >= 0) {
        setText((prevText) => prevText.slice(0, -1));
        setTimeout(() => clearText(index - 1), 100);
      } else {
        animate(0);
      }
    };

    animate(0);

    return () => {
      clearTimeout(animateTimeout);
    };
  }, []);

  return (
    <div className="w-full h-full bg-bg-Hero select-none overflow-y-hidden">
      <div className="grid grid-cols-2 max-laptop:grid-cols-1 max-laptop:grid-rows-reverse gap-10 p-10 ">
        <div className="flex justify-end max-laptop:justify-center mt-16 max-laptop:col">
          <img className="w-[50%]" src="/public/IMG_1524.png" alt="logo" />
        </div>
        <div className="flex items-center mt-16 max-laptop:justify-center max-laptop:col-span-full max-laptop:mt-0 mr-5 ml-5">
          <h1 className="text-6xl max-laptop:text-7xl max-phone:text-md font-bold">
            {text}
          </h1>
        </div>
      </div>
      <div className="flex justify-center mb-[10%] mt-5">
        <a
          href="/Recipe"
          className="w-[30%] max-laptop:w-[40%] p-6 bg-slate-400 rounded-xl flex justify-center bg-opacity-30 hover:opacity-70 duration-300"
        >
          <button className="text-2xl max-phone:text-xs max-tablet:xs max-laptop:text-md font-body">
            Попробовать
          </button>
        </a>
      </div>
    </div>
  );
};
