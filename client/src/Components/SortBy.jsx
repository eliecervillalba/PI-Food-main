// import libraries
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import actions
import { sortByName, sortByScore } from "../Core/Actions";

// import styles
import "./SortBy.css";

// build componenet
function SortBy() {
  const Recipes = useSelector((state) => state.Recipes);
  const [order, setOrder] = useState(true);
  const dispath = useDispatch();

  // handle function
  function handleSort(e) {
    if (e.target.value === "asc" || e.target.value === "des") {
      setOrder(!order);
      dispath(sortByName(e.target.value, Recipes, order));
    } else if (e.target.value === "low" || e.target.value === "high") {
      setOrder(!order);
      dispath(sortByScore(e.target.value, Recipes, order));
    }
  }

  // render component
  return (
    <div>
      <select onChange={(e) => handleSort(e)}>
        <option value="null">-Select-</option>
        <option value="asc">Title A to Z</option>
        <option value="des">Title Z to A</option>
        <option value="low">Score LOW</option>
        <option value="high">Score HIGH</option>
      </select>
    </div>
  );
}

// export component
export default SortBy;
