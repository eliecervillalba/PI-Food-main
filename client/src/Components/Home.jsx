// import libraries
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import Actions
import { getAllRecipes, getTypesDiet } from "../Core/Actions";

// import styles
import "./Home.css";

// import components
import SearchBar from "./SeachBar";
import FilterByTypes from "./FilterByTypes";
import SortBy from "./SortBy";
import CardsRecipes from "./CardsRecipes";

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
    <div className="home-container">
      {/* render title */}
      <h1>YOUR FAVORITE RECIPES</h1>

      {/* render Search Bar */}
      <div className="sb-container">
        <SearchBar />
      </div>

      {/* Render Fiter & Sort' */}
      <div>
        <h5>
          Filter by Diet: <FilterByTypes />
        </h5>
        <h5>
          Order by: <SortBy />
        </h5>
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
