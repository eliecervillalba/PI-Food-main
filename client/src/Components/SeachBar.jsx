// import libraries
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeByKeyword } from "../Core/Actions";

// import styles
import "./SearchBar.css";

function SearchBar() {
  // create local state and dispatch
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  // updates the state every time a change occurs in the input
  function handleChange(e) {
    setKeyword(e.target.value);
  }

  function handleSubmit(e) {
    // prevent the form from updating
    e.preventDefault();
    // dispatch event
    dispatch(getRecipeByKeyword(keyword));
    // reset state
    setKeyword("");
  }

  // render search bar
  return (
    <div className="searchBar-container">
      <input
        value={keyword}
        placeholder="Entry keyword..."
        type="text"
        onChange={(e) => handleChange(e)}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Search
      </button>
    </div>
  );
}

// export component
export default SearchBar;
