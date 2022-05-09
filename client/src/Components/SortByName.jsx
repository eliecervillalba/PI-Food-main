// import libraries
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import actions
import { sortByName } from "../Core/Actions";

// import styles
import "./SortByName.css";

// build componenet
function SortByName() {
  const Recipes = useSelector((state) => state.Recipes);
  const [order, setOrder] = useState(true);
  const dispath = useDispatch();

  // handle function
  function handleSort(e) {
    setOrder(!order);
    dispath(sortByName(e.target.value, Recipes, order));
  }

  // render component
  return (
    <div>
      <select onChange={(e) => handleSort(e)}>
        <option value="null">-Select-</option>
        <option value="asc">A to Z</option>
        <option value="des">Z to A</option>
      </select>
    </div>
  );
}

// export component
export default SortByName;
