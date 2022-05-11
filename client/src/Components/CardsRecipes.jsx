// import libraries and styles
import React, { useState } from "react";
import "./CardsRecipes.css";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../Core/Actions";

// import component CardRecipe
import CardRecipe from "./CardRecipe";

// Create component CardsRecipe
function CardsRecipes() {
  const Recipes = useSelector((state) => state.Recipes);

  const [prev, setPrev] = useState(0);
  const [current, setCurrent] = useState(1);
  const [next, setNext] = useState(9);

  const dispatch = useDispatch();

  const rangeByPage = 9; // jump range
  const totalNumPages = Math.ceil(Recipes.length / rangeByPage); // total records

  function handlePrev(e) {
    if (current > 1) {
      setCurrent((current) => current - 1);
      setPrev((prev) => prev - rangeByPage);
      setNext((next) => next - rangeByPage);
      dispatch(setPage({ prev, current, next }));
    }
  }

  function handleNext(e) {
    if (current < totalNumPages) {
      setCurrent((current) => current + 1);
      setPrev((prev) => prev + rangeByPage);
      setNext((next) => next + rangeByPage);
      dispatch(setPage({ prev, current, next }));
    }
  }

  return (
    <div className="cards">
      <div className="btn-containner">
        {/* render button pager */}
        <button onClick={(e) => handlePrev(e)}>{"<<"}</button>
        <span> {current} </span>
        <button onClick={(e) => handleNext(e)}>{">>"}</button>
      </div>
      {Recipes.length ? (
        Recipes.slice(prev, next).map((e) => (
          <CardRecipe
            key={e.id}
            id={e.id}
            title={e.title}
            image={e.image}
            diets={e.diets}
            spoonacularScore={e.spoonacularScore}
          />
        ))
      ) : (
        <h1>Recipes not found with this criteria!</h1> // if there are not recipes
      )}
    </div>
  );
}

// export component
export default CardsRecipes;
