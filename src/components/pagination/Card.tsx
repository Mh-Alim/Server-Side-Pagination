import React from "react";

const Card = ({
  id,
  title,
  description,
  thumbnail,
}: {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}) => {
  return (
    <div className=" w-[300px] border-2 border-black p-4 ">
      <img className=" " src={thumbnail} alt="card-image" />
      <div>
        <h1 className=" font-bold  mb-3">
          {id}-{title}
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
