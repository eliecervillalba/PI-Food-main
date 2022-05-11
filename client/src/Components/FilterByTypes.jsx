// import libraries
import React from "react";
import { useDispatch, useSelector } from "react-redux";

//import actions
import { filterByTypesDiet } from "../Core/Actions";

// create component
function FilterByTypes() {
  const allRecipes = useSelector((state) => state.allRecipes);
  const typesDiet = useSelector((state) => state.typesDiet);
  const dispatch = useDispatch();

  // handle functions
  function handleFilter(e) {
    dispatch(filterByTypesDiet(e.target.value, allRecipes));
  }

  // render component
  return (
    <div>
      <select onChange={(e) => handleFilter(e)}>
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
