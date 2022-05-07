// import libraries
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// import actions
import { sortByName } from "../Core/Actions";

// import styles
import "./SortByName.css";

// build componenet
function SortByName({ Recipes, local, setLocal }) {
  const dispath = useDispatch();

  // handle function
  function handleSortByName(e) {
    dispath(sortByName(e.target.value, Recipes));
    setLocal(!local);
  }

  // render component
  return (
    <div>
      <select onChange={(e) => handleSortByName(e)}>
        <option value="null">-Select-</option>
        <option value="asc">Acending</option>
        <option value="des">Decending</option>
      </select>
    </div>
  );
}

// export component
export default SortByName;
