const NotFound: React.FC = () => {
  return (
    <div className="bg-slate-900 w-screen h-screen">
      <div className="text-white flex justify-center items-center h-full text-9xl flex-col gap-16">
        404
        <a
          href="/Menu"
          className="w-full flex justify-center items-center hover:opacity-60 duration-300 transition-all"
        >
          <button className="bg-slate-700 p-4 rounded-lg w-[30%] text-2xl">
            Back to
          </button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
