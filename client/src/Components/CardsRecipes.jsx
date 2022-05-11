// import libraries
import React, { useState } from "react";
import "./CardsRecipes.css";

// import component CardRecipe
import CardRecipe from "./CardRecipe";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../Core/Actions";

// Create component CardsRecipe
function CardsRecipes() {
  const Recipes = useSelector((state) => state.Recipes);
  const countPage = useSelector((state) => state.countPage);

  const [prev, setPrev] = useState(0);
  const [current, setCurrent] = useState(1);
  const [next, setNext] = useState(9);

  const dispatch = useDispatch();

  function handlePrev(e) {
    if (current > 1) {
      setCurrent((current) => current - 1);
      setPrev((prev) => prev - 9);
      setNext((next) => next - 9);
      dispatch(setPage({ prev, current, next }));
    }
  }

  function handleNext(e) {
    if (current < 10) {
      setCurrent((current) => current + 1);
      setPrev((prev) => prev + 9);
      setNext((next) => next + 9);
      dispatch(setPage({ prev, current, next }));
    }
  }

  console.log("cards", prev, next);
  return (
    <div className="cards">
      <div>
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
          <h1>Recipes not found with this criteria!</h1>
        )}
      </div>

      <div>
        <button onClick={(e) => handlePrev(e)}>{"<<"}</button>
        <span> {current} </span>
        <button onClick={(e) => handleNext(e)}>{">>"}</button>
      </div>
    </div>
  );
}

// export component
export default CardsRecipes;
