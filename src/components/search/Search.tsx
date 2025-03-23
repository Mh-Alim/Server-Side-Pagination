import React, { useEffect, useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const fetchSearchResults = async () => {
    const res = await fetch(
      `https://www.google.com/complete/search?q=${searchText}&cp=3&client=gws-wiz&xssi=t&gs_pcrt=undefined&hl=en-IN&authuser=0&psi=xDfUZ_vIGLOLvr0P3KSToQ4.1741961156752&dpr=2&pq=cors%20extension&browser=mozilla`
    );
    const json = await res.json();

    console.log("json: ", json);
    return json;
  };
  useEffect(() => {
    // make api call
    fetchSearchResults();
  }, [searchText]);
  return (
    <div className="w-full flex mt-50 flex-col items-center justify-center ">
      <input
        type="text"
        placeholder="search here"
        className=" border border-black w-[30vw] py-3 px-6 rounded-4xl outline-none "
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className=" border border-black w-[30vw] mt-3 p-3 ">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis iusto,
          voluptatem pariatur qui, quia modi fugit iure cum magnam deleniti
          praesentium et voluptas perspiciatis eum ea provident veritatis atque
          quos?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis iusto,
          voluptatem pariatur qui, quia modi fugit iure cum magnam deleniti
          praesentium et voluptas perspiciatis eum ea provident veritatis atque
          quos?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis iusto,
          voluptatem pariatur qui, quia modi fugit iure cum magnam deleniti
          praesentium et voluptas perspiciatis eum ea provident veritatis atque
          quos?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis iusto,
          voluptatem pariatur qui, quia modi fugit iure cum magnam deleniti
          praesentium et voluptas perspiciatis eum ea provident veritatis atque
          quos?
        </p>
      </div>
    </div>
  );
};

export default Search;
