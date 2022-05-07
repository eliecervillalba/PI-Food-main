// import libraries
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// import Actions
import { getAllRecipes, getTypesDiet } from "../Core/Actions";

// import styles
import "./Home.css";

// import components
import SearchBar from "./SeachBar";
import FilterByTypes from "./FilterByTypes";
import SortByName from "./SortByName";
import CardsRecipe from "./CardsRecipe";

export default function Home() {
  // destructuring and
  const dispatch = useDispatch();
  const typesDiet = useSelector((state) => state.typesDiet);
  const Recipes = useSelector((state) => state.Recipes);

  // estado
  const [local, setLocal] = useState(true);

  // useEffects
  useEffect(() => {
    dispatch(getAllRecipes());
    dispatch(getTypesDiet());
  }, [dispatch]);

  const Prueba = () => {
    const Recipes1 = useSelector((state) => state.Recipes);
    return <></>;
  };

  useEffect(() => {
    <Prueba />;
  }, [local]);

  // render components
  return (
    <div className="home-container">
      <h1>YOUR FAVORITE RECIPES</h1>

      <div className="sb-container">
        <SearchBar />
      </div>

      <div>
        <FilterByTypes typesDiet={typesDiet} />
      </div>

      <div>
        <SortByName Recipes={Recipes} local={local} setLocal={setLocal} />
      </div>

      <div>
        {Recipes ? (
          <CardsRecipe Recipes={Recipes} />
        ) : (
          <h1>There are no recipes to display!</h1>
        )}
      </div>
    </div>
  );
}
