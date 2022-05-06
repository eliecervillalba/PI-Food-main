// import libraries
import React from "react";
import { useDispatch, useSelector } from "react-redux";

//import actions
import { filterByTypesDiet } from "../Core/Actions";

// import styles
import "./FilterByTypes.css";

// create component
function FilterByTypes({ typesDiet }) {
  const allRecipes = useSelector((state) => state.allRecipes);
  const dispatch = useDispatch();

  // handle functions
  function handleFilterByTypes(e) {
    dispatch(filterByTypesDiet(e.target.value, allRecipes));
  }

  // render component
  return (
    <div>
      <select onChange={(e) => handleFilterByTypes(e)}>
        <option value="all">All Diets</option>
        {typesDiet?.map((diet) => (
          <option key={diet.name} value={diet.name}>
            {diet.name}
          </option>
        ))}
      </select>
    </div>
  );
}

// export componenet
export default FilterByTypes;
