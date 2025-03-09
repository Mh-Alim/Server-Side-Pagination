import React, { useEffect, useState } from "react";
import Card from "./Card";
import PagesButtons from "./PagesButtons";
import Shimmer from "./Shimmer";

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
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
    );
    const json = await res.json();
    console.log("json: ", json);
    setCardData(json.products);
    const products = json.total;
    const allPages = Math.ceil(products / LIMIT);
    setTotalPages(allPages);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [skip]);

  return (
    <div className=" flex flex-col items-center ">
      {loading ? (
        <Shimmer />
      ) : (
        <div className=" p-5 flex justify-center gap-4 flex-wrap ">
          {cardData.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      )}
      <PagesButtons skip={skip} totalPages={totalPages} setSkip={setSkip} />
    </div>
  );
};

export default PaginationContainer;
