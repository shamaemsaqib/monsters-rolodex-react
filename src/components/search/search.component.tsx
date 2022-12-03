import React, { ChangeEventHandler } from "react";

import "./search.styles.css";

type searchBoxProps = {
  placeholder: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
};

const Search = ({ placeholder, handleChange }: searchBoxProps) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    ></input>
  );
};

export default Search;
