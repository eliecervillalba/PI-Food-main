// import libraries
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import actions
import { sortByScore } from "../Core/Actions";

// import styles
import "./SortByScore.css";

// build componenet
function SortByScore() {
  const Recipes = useSelector((state) => state.Recipes);
  const [order, setOrder] = useState(true);
  const dispath = useDispatch();

  // handle function
  function handleSort(e) {
    setOrder(!order);
    dispath(sortByScore(e.target.value, Recipes, order));
  }

  // render component
  return (
    <div>
      <select onChange={(e) => handleSort(e)}>
        <option value="null">-Select-</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>
    </div>
  );
}

// export component
export default SortByScore;
