import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-[#0A0A0A] z-50 border-b-2 border-b-[#e79e0d]">
      <div className="px-[2%] h-[70px] m-auto flex justify-between items-center">
        <Link to="/" className="w-full">
          <img src="img/logo.png" alt="logo" className="w-[50px] h-[41.3px]" />
        </Link>
        <div>
          <input type="search" placeholder="Search" className="w-[250px] h-[48px] rounded-[50px] bg-inherit border-[#e79e0d] border-2 outline-none px-5" />
        </div>
      </div>
    </nav>
  );
};
