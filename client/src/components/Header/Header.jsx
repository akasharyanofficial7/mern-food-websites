import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h1 className=" text-5xl font-semibold">
          Order your favourite food here
        </h1>
        <p className="text-white">
          Food is not just a means of sustenance; it's a cultural cornerstone, a
          source of joy, and a window into the soul of a community. From the
          vibrant spices of Indian cuisine to the comforting warmth of Italian
          pasta dishes, food reflects the diversity and richness of human
          experience.
        </p>
        <button className="bg-white   hover:text-white text-gray-800 font-semibold py-2 px-4 rounded hover:bg-yellow-600">
          Open Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
