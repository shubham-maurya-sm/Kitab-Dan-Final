import React from "react";
import Search from "./Search";
import "./index.css";

const Header = () => {
  return (
    <div className="container mx-auto text-center mt-10">
      <h1 className="text-4xl">Search Books</h1>
      <p className="text-lg mt-2">Search for the book using book title</p>
      <Search />
    </div>
  );
};

export default Header;
