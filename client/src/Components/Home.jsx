// import libraries
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// import Actions
import { getAllRecipes } from "../Core/Actions";

// import styles
import "./Home.css";

// import components
import SearchBarRecipe from "./SeachBarRecipe";
import CardsRecipe from "./CardsRecipe";

export default function Home() {
  // destructuring list
  const recipes = useSelector((state) => state.allRecipes);
  const dispatch = useDispatch();
  // useEffects

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  // render components
  return (
    <div className="home-container">
      <h1>YOUR FAVORITE RECIPES</h1>

      <div className="sb-container">
        <SearchBarRecipe />
      </div>

      <div>
        <CardsRecipe recipes={recipes} />
      </div>
    </div>
  );
}
