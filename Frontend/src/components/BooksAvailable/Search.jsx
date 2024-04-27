import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../contexts/Context";
import "./index.css";

const Search = () => {
  const [keywords, setKeywords] = useState("");
  const { getSearchedBooks, searchString } = useContext(Context);

  const handleChange = (e) => {
    setKeywords(e.target.value);
    getSearchedBooks(e.target.value);
  };

  useEffect(() => {
    if (searchString === null) {
      setKeywords("");
    }
  }, [searchString]);

  return (
    <input
      onChange={handleChange}
      className="w-1/2 p-4 mx-auto form-input"
      type="search"
      placeholder="e.g. The Prophet"
      value={keywords}
    />
  );
};

export default Search;
