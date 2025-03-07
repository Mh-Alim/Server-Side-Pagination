import React from "react";
import { CardType, LIMIT } from "./PaginationContainer";

const PagesButtons = ({
  totalPages,
  setSkip,
  skip,
}: {
  totalPages: number;
  setSkip: React.Dispatch<React.SetStateAction<number>>;
  skip: number;
}) => {
  return (
    <div className=" px-72 flex gap-5 items-center ">
      {skip > 0 && (
        <button
          onClick={() => setSkip((skip) => skip - 10)}
          className=" bg-blue-950 text-white px-5 py-2 h-fit rounded-xl "
        >
          Prev
        </button>
      )}
      <div className=" flex gap-1 flex-wrap ">
        {Array.from({ length: totalPages }, (_, index) => index).map((idx) => (
          <button
            onClick={() => setSkip(idx * LIMIT)}
            className={` cursor-pointer px-5 py-2 m-5 rounded-xl bg-slate-300 ${
              skip / 10 == idx && "font-bold"
            }`}
          >
            {idx + 1}
          </button>



        ))}
      </div>
      {skip < (totalPages - 1) * LIMIT && (
        <button
          onClick={() => setSkip((skip) => skip + 10)}
          className=" bg-blue-950 text-white px-5 py-2 h-fit rounded-xl "
        >
          Next
        </button>
      )}
    </div>
  );
};

export default PagesButtons;
