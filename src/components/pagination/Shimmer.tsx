import React from "react";

const Shimmer = () => {
  return (
    <div className=" p-5 flex justify-center gap-4 flex-wrap ">
      {Array.from({ length: 10 }).map((_e, idx) => (
        <div
          key={idx}
          className=" w-[300px] h-[400px] bg-slate-200 rounded-sm "
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
