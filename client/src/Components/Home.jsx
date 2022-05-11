// import libraries
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import Actions
import { getAllRecipes, getTypesDiet } from "../Core/Actions";

// import styles
import "./Home.css";

// import components
import SearchBar from "./SearchBar";
import FilterByTypes from "./FilterByTypes";
import SortBy from "./SortBy";
import CardsRecipes from "./CardsRecipes";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getAllRecipes());
    dispatch(getTypesDiet());
  }, [dispatch]);

  useEffect(() => {
    <CardsRecipes />;
  }, [order]);

  // render components
  return (
    <div>
      {/* render title */}
      <h1>YOUR FAVORITE RECIPES</h1>

      {/* render Search Bar */}
      <div>
        <SearchBar />
      </div>

      {/* Render Fiter & Sort' */}
      <div>
        <h5>
          Filter by Type Diet: <FilterByTypes />
        </h5>
        <h5>
          Order by: <SortBy />
        </h5>
      </div>

      <div>
        <Link to={"/recipe"}>
          <button>Create Recipe</button>
        </Link>
      </div>

      {/* render Cards Recipes */}
      <div>
        <CardsRecipes />
      </div>
    </div>
  );
}

//export component
export default Home;
