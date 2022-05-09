// import libraries
import React from "react";
import "./CardsRecipes.css";

// import component CardRecipe
import CardRecipe from "./CardRecipe";
import { useSelector } from "react-redux";

// Create component CardsRecipe
function CardsRecipes() {
  const Recipes = useSelector((state) => state.Recipes);
  console.warn("aqui", Recipes);
  return (
    <div className="cards">
      {Recipes?.map((e) => (
        <CardRecipe
          key={e.id}
          id={e.id}
          title={e.title}
          image={e.image}
          diets={e.diets}
          spoonacularScore={e.spoonacularScore}
        />
      ))}
    </div>
  );
}

// export component
export default CardsRecipes;
