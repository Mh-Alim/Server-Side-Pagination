import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ menuItem, link }: { menuItem: string; link: string }) => {
  return (
    <Link to={link}>
      <button className=" mx-3 cursor-pointer ">{menuItem}</button>
    </Link>
  );
};

export default MenuItem;
