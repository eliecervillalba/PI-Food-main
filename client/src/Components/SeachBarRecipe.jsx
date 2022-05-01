// import libraries
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeByWord } from "../Core/Actions";
import "./SearchBarRecipe.css";

function SearchBarRecipe() {
  // create local state and dispatch
  const [word, setWord] = useState("");
  const dispatch = useDispatch();

  // updates the state every time a change occurs in the input
  function handleChange(event) {
    setWord(event.target.value);
  }

  function handleSubmit(event) {
    // prevent the form from updating
    event.preventDefault();
    // dispatch event
    dispatch(getRecipeByWord(event));
    // reset state
    setWord("");
  }

  // render search bar
  return (
    <div className="searchBar-container">
      <input
        value={word}
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

export default SearchBarRecipe;
