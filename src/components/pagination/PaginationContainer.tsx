import React, { useEffect, useState } from "react";
import Card from "./Card";
import PagesButtons from "./PagesButtons";

export type CardType = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
};
export const LIMIT = 10;
const PaginationContainer = () => {
  const [skip, setSkip] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [cardData, setCardData] = useState<CardType[]>([]);

  const fetchData = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
    );
    const json = await res.json();
    console.log("json: ", json);
    setCardData(json.products);
    const products = json.total;
    const allPages = Math.ceil(products / LIMIT);
    setTotalPages(allPages);
  };

  useEffect(() => {
    fetchData();
  }, [skip]);

  return (
    <div className=" flex flex-col items-center ">
      <div className=" p-5 flex justify-center gap-4 flex-wrap ">
        {cardData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>

      <PagesButtons skip={skip} totalPages={totalPages} setSkip={setSkip} />
    </div>
  );
};

export default PaginationContainer;
