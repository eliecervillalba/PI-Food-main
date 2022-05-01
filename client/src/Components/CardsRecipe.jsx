// import libraries
import React from "react";
import "./CardsRecipe.css";

// import component CardRecipe
import CardRecipe from "./CardRecipe";

// Create component CardsRecipe
function CardsRecipe({ recipes }) {
  return (
    <div className="cards">
      {recipes?.map((e) => (
        <CardRecipe
          key={e.id}
          id={e.id}
          title={e.title}
          image={e.image}
          diets={e.diets}
        />
      ))}
    </div>
  );
}

// export component
export default CardsRecipe;
