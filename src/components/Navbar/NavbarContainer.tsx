import React from "react";
import MenuItem from "./MenuItem";

const navItems = [
  {
    menuItem: "Pagination",
    link: "/pagination",
  },
  {
    menuItem: "Search",
    link: "/search",
  },
  {
    menuItem: "Comments",
    link: "/comments",
  },
];
const NavbarContainer = () => {
  return (
    <div className=" h-20 bg-black flex items-center justify-between px-20">
      <img
        className=" w-[50px] h-[50px] rounded-full "
        src="https://codeforgeek.com/wp-content/uploads/2021/11/the-closing-tag-1024x1024.jpeg"
        alt="lld-logo"
      />
      <div className=" text-white ">
        {navItems.map((e) => (
          <MenuItem link={e.link} menuItem={e.menuItem} />
        ))}
      </div>
    </div>
  );
};

export default NavbarContainer;
