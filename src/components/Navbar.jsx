import React from "react";
import popcorn from "../assets/png.png";

const Navbar = () => {

  return (
    <div className="flex justify-between">
      
        <a href="/">
        <div className="flex">
          <img src={popcorn} alt="Logo Img" className="w-[13%]" />
          <h2 className="text-3xl mt-8 font-semibold">Popcorn Verse</h2>
          </div>
        </a>
    </div>
  );
};

export default Navbar;
